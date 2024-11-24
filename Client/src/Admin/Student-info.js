import React from 'react';
import '../Styles/Attendance.css'; 
import NavigationAdmin from "../Components/navigation_admin";


export default function Attendance ({ students }) {
  return (
    <div>
     
      <NavigationAdmin /> 
      {Object.keys(students).length === 0 ? (
        <h1>Nothing Yet !!</h1>
      ) : (
        Object.keys(students).map((name) => {
          if (students[name].rollno) {
            return (
              <div className="attendance-card" key={name}>
                <ul style={{ listStyleType: 'none' }}>
                  <h3>Name: {name}</h3>
                  <li>Roll number: {students[name].rollno}</li>
                  <li>Attended: {students[name].attended ? 'Yes' : 'No'}</li>
                  <li>Delivered: {students[name].delivered ? 'Yes' : 'No'}</li>
                  <li>Percentage: {students[name].percentage + "%"}</li>
                </ul>
              </div>
            );
          }
          return null; 
        })
      )}
    </div>
  );
};