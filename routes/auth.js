const express = require("express");
const router = express.Router();
const path = require("path");
const session = require("express-session");
const FileStore = require('express-session-file-store'); //to store sessions on fileSystem
const fs = require('fs');
router.use(express.static(path.join(__dirname, "public")));
router.use(express.urlencoded({ extended: true }));


// Set up session middleware
router.use(session({
    store: new FileStore( './sessions', // directory to store session files
       { ttl: 86400 // time to live in seconds (1 day)
      }),
    secret: 'Secret',  // Change this to a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: {}  // Set secure to true if using HTTPS
  }));


// Path to the users.json file
const usersFilePath = path.join(__dirname, '../data/users.json');


// Function to get users from the JSON file
function getUsers() {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
}
function getAdmins() {
    const data = fs.readFileSync(path.join(__dirname, '../data/admins.json'), 'utf-8');
    return JSON.parse(data);
}


// Function to save users to the JSON file
function saveUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4  ), 'utf-8');
}

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        console.log('Session is active:', req.session.user);
        next();
    } else {
        console.log('Session expired or not present');
        res.redirect('/login');
    }
}

router.get("/signUp", (req, res) => {
    res.render("signUp.ejs", { title: "Registration", error: "" } );
    console.log(req.session);
});
//Registration route(to register a new user)
router.post("/signUp", (req, res) => {
    let { username, password,name } = req.body;
    name = username;
    const users = getUsers();
    // Validate input
    if (username.trim() === ""|| password.trim() === "") { // if user enter only space as username and password
        res.render("signUp.ejs", { title: "Registration", error: "Please enter a username and password." } );
    } 
    else if (users[username]) {    //if username already exists in database
        res.render("signUp.ejs", { title: "Registration", error: "Username already exists." } );
    } else {    //if username and password doesnt exists in database and username is unique
        users[username] = { password, name };
        saveUsers(users);
        res.redirect('/login');
    }
});

router.get("/login", (req, res) => {
    res.render( "logIn.ejs", { title: "Login",error: "" } );
    console.log(req.body);
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const users = getUsers();
    const admins = getAdmins();

    if (users[username] && users[username].password === password) {
        req.session.user = { name: users[username].name, password: users[username].password };
        console.log(req.session.user);
        res.redirect('/');
    }
    else if(admins[username] && admins[username].password === password) {
        req.session.user = { name: admins[username].name, username };
        console.log(req.session.user);
        res.redirect('/admin');

    } else {
        res.render("logIn.ejs", { title: "Login", error: "Invalid username or password" } );
    }
    
});
   

// <h1>Welcome, ${req.session.user.name}</h1>
//         <a href="/logout">Logout</a>
// Protected route (only accessible when authenticated)
router.get('/', isAuthenticated, (req, res) => {
    res.render("student/home", { pageTitle: "Home Page" ,path: "/",user: req.session.user} );
});
router.get('/admin', isAuthenticated, (req, res) => {
    res.render("admin/home", { pageTitle: "Home Page" ,path: "/admin",user: req.session.user} );
});


// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error logging out');
        }
        res.clearCookie('connect.sid'); // Optional: Explicitly clear the cookie
        res.redirect('/login');
    });
});


module.exports = router;