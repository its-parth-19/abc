import React from 'react';

export default function Header_admin() {
  return (
    <nav className="navbar">
      <img src="/images/Logo.png" alt="Campus Sphere" />

      <ul className="nav-list">
        <li><a href="/admin" className="active">Home</a></li>
        <li><a href="/admin/student" className="">Student Info</a></li>
        <li><a href="/admin/attendance" className="">Attendance</a></li>
        <li><a href="/admin/performance" className="">Performance</a></li>
        <li><a href="/admin/contact" className="">Contact Us</a></li>
      </ul>
      <div className="auth-buttons">
        <a className="signup" href="/signUp">Sign up</a>
        <span>|</span>
        <a className="login" href="/logout">Login</a>
      </div>
    </nav>
  );
}
