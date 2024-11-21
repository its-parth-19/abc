import React from 'react';
import Head from '../../../Components/head.js';
import Navigation from '../../../Components/navigation.js';
import '../Styles/Info.css';

export default function Info() {
  return (
    <div>
      <Head />
      <Navigation />

      {students[user.name] ? (
        <div className="student-card">
          <h2>Student Details</h2>
          <br />
          <p>
            <strong>Name :</strong> {students[user.name].fullname}
          </p>
          <p>
            <strong>Roll Number :</strong> {students[user.name].rollno}
          </p>
          <p>
            <strong>Date Of Birth :</strong> {students[user.name].dob}
          </p>
          <p>
            <strong>Email :</strong> {students[user.name].email}
          </p>
          <p>
            <strong>Mobile Number :</strong> {students[user.name].mobno}
          </p>
          <p>
            <strong>Gender :</strong> {students[user.name].gender}
          </p>
          <p>
            <strong>Father's Name :</strong> {students[user.name].father}
          </p>
          <p>
            <strong>Mother's Name :</strong> {students[user.name].mother}
          </p>
          <p>
            <strong>Blood Group :</strong> {students[user.name].bldgrp}
          </p>
          <p>
            <strong>City :</strong> {students[user.name].city}
          </p>
          <p>
            <strong>State :</strong> {students[user.name].state}
          </p>
          <p>
            <strong>Country :</strong> {students[user.name].nat}
          </p>
        </div>
      ) : (
        <div>
          <h1>Register Here !!</h1>
          <a className="registerBtn" href="/register">
            <button>Register</button>
          </a>
        </div>
      )}
    </div>
  );
}
