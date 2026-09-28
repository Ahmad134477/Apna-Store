
import "./Login.css";

import { useState } from "react";


// ==================================================
// Login Component
// ==================================================
// onLogin:
// Login successful hone par App.jsx ka function chalega.
//
// onRegister:
// Create Account par click karne se Registration Page
// open hoga.
// ==================================================

function Login({ onLogin, onRegister }) {


  // ==================================================
  // Email State
  // ==================================================

  const [email, setEmail] = useState("");


  // ==================================================
  // Password State
  // ==================================================

  const [password, setPassword] = useState("");


  // ==================================================
  // Login Function
  // ==================================================

  function handleLogin(e) {

    // Form submit hone par page reload nahi hoga
    e.preventDefault();


    // ==================================================
    // STEP 1
    // Check Email aur Password empty to nahi
    // ==================================================

    if (!email || !password) {

      alert("Enter the Email and Password");

      return;
    }


    // ==================================================
    // STEP 2
    // localStorage se "users" data lena
    //
    // Registration.jsx mein humne:
    //
    // localStorage.setItem(
    //   "users",
    //   JSON.stringify(users)
    // );
    //
    // kiya tha.
    // ==================================================

    const savedUsers = localStorage.getItem("users");


    // ==================================================
    // STEP 3
    // Agar users localStorage mein nahi hain
    // ==================================================

    if (!savedUsers) {

      alert("Please Register First");

      return;
    }


    // ==================================================
    // STEP 4
    // JSON String ko JavaScript Array mein convert
    // karna.
    // ==================================================

    const users = JSON.parse(savedUsers);


    // ==================================================
    // STEP 5
    // Enter ki hui Email ko users array mein search
    // karna.
    //
    // find() matching user return karega.
    // ==================================================

    const user = users.find(
      (user) => user.email === email
    );


    // ==================================================
    // STEP 6
    // Agar Email registered nahi hai
    // ==================================================

    if (!user) {

      alert("Email is not registered");

      return;
    }


    // ==================================================
    // STEP 7
    // Password check karna
    // ==================================================

    if (user.password !== password) {

      alert("Invalid Password");

      return;
    }


    // ==================================================
    // STEP 8
    // Login Successful
    // ==================================================



    // App.jsx mein login state true hogi
    onLogin();

  }


  // ==================================================
  // UI
  // ==================================================

  return (

    <div className="container">

      <form onSubmit={handleLogin}>


        {/* Login Heading */}

        <h2>
          Login
        </h2>


        {/* ==========================================
            Email Input
        ========================================== */}

        <input
          type="email"
          placeholder="Enter the Email.."

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }
        />


        {/* ==========================================
            Password Input
        ========================================== */}

        <input
          type="password"
          placeholder="Enter the Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }
        />


        {/* ==========================================
            Login Button
        ========================================== */}

        <button type="submit">
          Login
        </button>


        {/* ==========================================
            Registration Text
        ========================================== */}

        <p>
          Don't have an account?
        </p>


        {/* ==========================================
            Create Account Button
        ========================================== */}

        <button
          type="button"
          onClick={onRegister}
        >
          Create Account
        </button>


      </form>

    </div>

  );
}


export default Login;

