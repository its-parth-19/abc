const express = require('express');

const app = express();

const userRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");

app.set('view engine', 'ejs');

app.use(express.static("./public"));
app.use(express.urlencoded( {extended : true} ));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(4000);