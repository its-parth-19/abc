import React, { useState } from 'react';
import '../Styles/Attendance_admin.css'; 
import '../Styles/Footer.css'; 

export default function AttendanceAdmin ({ students })  {
  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (rollno, value) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [rollno]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Attendance Data:', attendanceData);
   
  };

  return (
    <div>
      <h1 id="Attendance">Attendance</h1>

      <main>
        <form onSubmit={handleSubmit}>
          {Object.keys(students).length !== 0 ? (
            <div className="grid">
              {Object.entries(students).map(([stdName, details]) => (
                <div className="student-card" key={details.rollno}>
                  <img src='../images/Profile.png' alt='Profile' />
                  <p>{details.fullname}</p>
                  <input type="hidden" name="name" value={details.fullname} />
                  <p>{details.rollno}</p>
                  <input type="hidden" name="rollno" value={details.rollno} />
                  <select
                    name="attendance"
                    className="attendance-dropdown"
                    required
                    defaultValue="present"
                    onChange={(e) => handleAttendanceChange(details.rollno, e.target.value)}
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </div>
              ))}
            </div>
          ) : (
            <h1>Nothing Yet !!</h1>
          )}

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>

      <section className="call-to-action">
        <h2>Take Control of Attendance Now!</h2>
        <p>Empower your teaching with easy attendance management.</p>
        <button id="btn-j">Update</button>
        <button id="btn-j">Modify</button>
      </section>
    </div>
  );
};