import React from 'react'

export default function Header() {

  const user = false; 
  return (
    <nav className="navbar">
      <img src="/images/Logo.png" alt="Campus Sphere" />

      <ul className="nav-list">
        <li><a to="/" className="active">Home</a></li>
        <li><a to="/student/username" className="">Student Info</a></li>
        <li><a to="/attendance/username" className="">Attendance</a></li>
        <li><a to="/performance" className="">Performance</a></li>
        <li><a to="/contact" className="">Contact Us</a></li>
        <div className="auth-buttons">
          <a className="signup" to="/signUp">Sign up</a>
          <span>|</span>
          {user ? (
            <a className="login" to="/logout">Logout</a>
          ) : (
            <a className="login" to="/login">Login</a>
          )}
        </div>
      </ul>
    </nav>
  )
}
