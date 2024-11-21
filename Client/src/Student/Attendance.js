import React from 'react';
import '../Styles/Attendance.css';

export default function Attendance() {
  return (
    <div>
      <nav>
        <img src="/images/Logo.png" alt="Campus Sphere" />
        <ul className="nav-list">
          <li><a to="/admin" className="">Home</a></li>
          <li><a to="/admin/student" className="">Student Info</a></li>
          <li><a to="/admin/attendance" className="active">Attendance</a></li>
          <li><a to="/admin/performance" className="">Performance</a></li>
          <li><a to="/admin/contact" className="">Contact Us</a></li>
          <div className="auth-buttons">
            <a className="signup" to="/signUp">Sign up</a>
            <span>|</span>
            <a className="login" to="/logout">Login</a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
