const express = require('express');

const app = express();

const userRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");
const Authroutes = require("./routes/auth");

const Admin = require("./models/admin");
const Student = require("./models/student");

app.set('view engine', 'ejs');

app.use(express.static("./public"));
app.use(express.urlencoded( {extended : true} ));

app.use(Authroutes);
app.use("/admin",Admin.isAuthenticated, adminRoutes);
app.use(userRoutes,Student.isAuthenticated);

app.listen(4000);