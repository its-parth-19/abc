const fs = require("fs");
const path = require("path");

const p1 = path.join(__dirname, "../data/student-details.json");
const p2 = path.join(__dirname, "../data/attendance-list.json");

module.exports = class Student{

  static addStudentDetail(name, rollno) {

    fs.readFile(p1, (error, fileContent) => {

      let students = {};

      if (!error) students = JSON.parse(fileContent);
      
      students[name] = { rollno : rollno};

      fs.writeFile(p1, JSON.stringify(students, null, 4), (error) => {
        if (!error) console.log("Student detail added");
      });

    });

  }

  static fetchStudentAttendance(callBack) {

    fs.readFile(p2, (error, fileContent) => {

      if (!error) callBack(JSON.parse(fileContent));

      else callBack({});

    });

  }

  static isAuthenticated(req, res, next) {
    if (req.session.user) {
        console.log('Session is active:', req.session.user);
        next();
    } else {
        console.log('Session expired or not present');
        res.redirect('/login');
    }
}

}