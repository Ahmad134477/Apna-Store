
import "./Registration.css";

import { useState } from "react";

function Registration({ onRegister }) {

  // ==========================================
  // User Name State
  // ==========================================
  const [name, setName] = useState("");


  // ==========================================
  // User Email State
  // ==========================================
  const [email, setEmail] = useState("");


  // ==========================================
  // User Password State
  // ==========================================
  const [password, setPassword] = useState("");


  // ==========================================
  // Confirm Password State
  // ==========================================
  const [confirmPassword, setConfirmPassword] = useState("");


  // ==========================================
  // Registration Function
  // ==========================================
  function handleRegistration(e) {

    // Form submit hone par page reload nahi hoga
    e.preventDefault();


    // ==========================================
    // STEP 1
    // Check all fields
    // ==========================================
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please Enter All Values");
      return;
    }


    // ==========================================
    // STEP 2
    // Check Password
    // ==========================================
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }


    // ==========================================
    // STEP 3
    // localStorage se existing users nikalo
    // ==========================================
    const savedUsers =
      localStorage.getItem("users");


    // Agar users nahi hain
    // to empty array use hoga
    const users = savedUsers
      ? JSON.parse(savedUsers)
      : [];


    // ==========================================
    // STEP 4
    // Check Email Already Registered?
    // ==========================================
    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );


    // Agar email already registered hai
    if (existingUser) {
      alert("This Email is already registered");
      return;
    }


    // ==========================================
    // STEP 5
    // New User Object
    // ==========================================
    const newUser = {
      name: name,
      email: email,
      password: password
    };


    // ==========================================
    // STEP 6
    // New User ko Array mein Add karo
    // ==========================================
    users.push(newUser);


    // ==========================================
    // STEP 7
    // Users ko localStorage mein Save karo
    // ==========================================
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );


  


    // ==========================================
    // STEP 9
    // Direct Home Page
    //
    // App.jsx mein onRegister={handleLogin}
    // diya hua hai.
    //
    // Isliye ye function:
    //
    // onRegister()
    //      ↓
    // handleLogin()
    //      ↓
    // setlogin(true)
    //      ↓
    // Home Page
    // ==========================================
    onRegister();
  }


  return (
    <div className="registration-container">

      <form onSubmit={handleRegistration}>

        {/* ==================================
            Registration Heading
        ================================== */}
        <h2>
          Registration
        </h2>


        {/* ==================================
            Name Input
        ================================== */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />


        {/* ==================================
            Email Input
        ================================== */}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />


        {/* ==================================
            Password Input
        ================================== */}
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />


        {/* ==================================
            Confirm Password Input
        ================================== */}
        <input
          type="password"
          placeholder="Confirm Your Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />


        {/* ==================================
            Register Button
        ================================== */}
        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Registration;
