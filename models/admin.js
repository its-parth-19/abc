const fs = require("fs");
const path = require("path");

const p1 = path.join(__dirname, "../data/student-details.json");
const p2 = path.join(__dirname, "../data/attendance-list.json");

module.exports = class Admin{

  static fetchAllStudentDetails(callBack){

    fs.readFile(p1, (error, fileContent) => {

      if(!error) callBack(JSON.parse(fileContent));

      else callBack({});

    });
    
  }

  static markAttendance(name, rollno, attendance){

    fs.readFile(p2, (error, fileContent) => {

      let students = {delivered : 0};

      if (!error) students = JSON.parse(fileContent);

      students.delivered++;
      
      for (let i = 0; i < name.length; i++) {
  
          if (students[name[i]] && attendance[i] === 'present') students[name[i]].attended++;
  
          else if (!students[name[i]]) {
            students[name[i]] = {rollno : rollno[i], attended : 0};
  
            if (attendance[i] === 'present') students[name[i]].attended++;

          }

          let per = (students[name[i]].attended / students.delivered) * 100;

          // per * 100 shifts the decimal point two places to the right, like "85.71428571428571" becomes "8571.428571428571".
          // Math.round() rounds the number to the nearest whole number, like "8571.428571428571" becomes "8571".
          // / 100 shifts the decimal point back two places to the left, giving you the number rounded to two decimal places, like , like "8571" becomes "85.71".
          students[name[i]].percentage = Math.round(per * 100) / 100;
      }

      fs.writeFile(p2, JSON.stringify(students,null,4), (error) => {
        if (!error) console.log("File written successfully");
      });

    });
    
  }

}