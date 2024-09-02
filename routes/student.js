const express = require('express');

const router = express.Router();

const Student = require("../models/student");

router.get("/", (request, response) => {
  response.render("student/home", {pageTitle : "Home", path : "/"});
})

router.get("/student", (request, response) => {

  response.render("student/info", {pageTitle : "Student", path : "/student"});

})

router.get("/register", (request, response) => {
  response.render("student/register", {pageTitle : "Registration page", path : "/student"});
})

router.post("/register", (request, response) => {

  const {name, rollno} = request.body;

  Student.addStudentDetail(name, rollno);

  // response.redirect("/registered/name/" + name + "/rollno/" + rollno);

  response.redirect("/");

})

router.get("/attendance", (request, response) => {
  response.render("student/attendance", {pageTitle : "Attendance", path : "/attendance", students : {}});
})

router.get("/attendance/name/:name", (request, response) => {

  const {name} = request.params;

  Student.fetchStudentAttendance( (students) => {

    response.render("student/attendance", {pageTitle : "Attendance", path : "/attendance", students : students, name : name});

  });

})

router.get("/performance", (request, response) => {
  response.render("student/performance", {pageTitle : "Performance", path : "/performance"});
})

router.get("/contact", (request, response) => {
  response.render("student/contact", {pageTitle : "Contact Us", path : "/contact"});
})

module.exports = router;