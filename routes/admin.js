const express = require("express");

const router = express.Router();

const Admin = require("../models/admin");

router.get("/attendance", (request, response) => {

  Admin.fetchAllStudentDetails( (students) => {
    
    response.render("admin/attendance", {pageTitle : "Attendance", path : "/attendance", students : students});
    
  });

})

router.post("/attendance", (request, response) => {
  const stuDetails = request.body;
  console.log(stuDetails);

  Admin.markAttendance(stuDetails.name, stuDetails.rollno, stuDetails.attendance);
    
  response.redirect("/admin/attendance");

})

module.exports = router;