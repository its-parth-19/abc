const express = require("express");

const router = express.Router();

const Admin = require("../models/admin");
const Student = require("../models/student");

router.get("/attendance", (request, response) => {

  Admin.fetchAllStudentDetails( (students) => {
    
    response.render("admin/attendance", {pageTitle : "Attendance", path : "/admin/attendance", students : students,user:request.session.user});
    
  });

})

router.post("/attendance", (request, response) => {
  const stuDetails = request.body;
  console.log(stuDetails);

  Admin.markAttendance(stuDetails.name, stuDetails.rollno, stuDetails.attendance);
    
  response.redirect("/admin/attendance");

})


router.get("/student", (request, response) => {

  Student.fetchStudentAttendance( (students) => {

    response.render("admin/student-info", {pageTitle : "Attendance", path : "/admin/student", students : students,user:request.session.user});

  });
})

router.get("/performance", (request, response) => {
  response.render("admin/performance", {pageTitle : "Performance", path : "/admin/performance", user:request.session.user});
})

router.get("/contact", (request, response) => {
  response.render("admin/contact", {pageTitle : "Contact Us", path : "/admin/contact", user:request.session.user});
})

module.exports = router;