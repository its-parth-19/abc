import React from "react";
import React, { useState } from "react";
import "../Styles/Register.css";

export default function Register() {
  // State to hold form values
  const [formData, setFormData] = useState({
    fullname: "",
    rollno: "",
    dob: "",
    email: "",
    mobno: "",
    gender: "",
    father: "",
    mother: "",
    bldgrp: "",
    city: "",
    state: "",
    nat: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., sending data to an API or server)
    console.log(formData);
  };

  return (
    <div className="container">
      <header>Registration</header>
      <form onSubmit={handleSubmit}>
        <div className="form-first">
          <div className="personal-details">
            <span className="title">Personal Details:</span>
            <div className="fields">
              <div className="input-field">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your name"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="rollno">Roll Number</label>
                <input
                  type="text"
                  name="rollno"
                  placeholder="Enter your roll number"
                  value={formData.rollno}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="mobno">Mobile Number</label>
                <input
                  type="tel"
                  name="mobno"
                  placeholder="Enter your mobile number"
                  value={formData.mobno}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    --select--
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Prefer not to say">Prefer Not to say</option>
                </select>
              </div>

              <div className="input-field">
                <label htmlFor="father">Father's Name</label>
                <input
                  type="text"
                  name="father"
                  placeholder="Enter your father's name"
                  value={formData.father}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="mother">Mother's Name</label>
                <input
                  type="text"
                  name="mother"
                  placeholder="Enter your mother's name"
                  value={formData.mother}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="bldgrp">Blood Group</label>
                <input
                  type="text"
                  name="bldgrp"
                  placeholder="Enter your blood group"
                  value={formData.bldgrp}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="nat">Nationality</label>
                <input
                  type="text"
                  name="nat"
                  placeholder="Enter your nationality"
                  value={formData.nat}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button className="Btn" type="submit">
                <span className="btnText">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
