const express = require('express');

const router = express.Router();

const Student = require("../models/student");

router.get("/student/:name", (request, response) => {

  Student.fetchStudentDetails( (students) => {

    response.render("student/info", {pageTitle : "Student page", path : "/student", user : request.session.user, students : students});

  })

})

router.get("/register", (request, response) => {
  response.render("student/register", {pageTitle : "Registration Form", path : "/student", user:request.session.user});
})

router.post("/register", (request, response) => {

  const {name, rollno, dob, email, mobno, gender, father, mother, bldgrp, city, state, nat} = request.body;

  Student.addStudentDetail(name, rollno, dob, email, mobno, gender, father, mother, bldgrp, city, state, nat);

  response.redirect(`/student/${name}`);

})

router.get("/attendance/:name", (request, response) => {

  const {name} = request.params;

  Student.fetchStudentAttendance( (students) => {

    Student.fetchStudentDetails ( (stuDetails) => { // This is used to pass the student-details file info to attendance.ejs so that it can access fullname
      
      response.render("student/attendance", {pageTitle : "Attendance", path : "/attendance", students : students, stuDetails : stuDetails, name : name, user : request.session.user});
    
    });


  });

})

router.get("/performance", (request, response) => {
  response.render("student/performance", {pageTitle : "Performance", path : "/performance", user:request.session.user});
})

router.get("/contact", (request, response) => {
  response.render("student/contact", {pageTitle : "Contact Us", path : "/contact", user:request.session.user});
})

module.exports = router;