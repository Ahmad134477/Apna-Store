
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Registration from "./page/Registration";
import About from "./page/About";
import Categories from "./page/Categories";
import Navbar from "./Component/Navbar";
import Cart from "./page/Cart";
import Footer from "./Component/Footer";

import "./App.css";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


function App() {

  // ==========================================
  // LOGIN STATE
  // ==========================================

  const [login, setlogin] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );


  // ==========================================
  // REGISTER STATE
  // ==========================================

  const [register, setRegister] = useState(false);


  // ==========================================
  // DARK MODE STATE
  // ==========================================

  const [darkMode, setDarkMode] = useState(false);


  // ==========================================
  // DARK MODE CHANGE FUNCTION
  // ==========================================

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };


  // ==========================================
  // LOGIN FUNCTION
  // ==========================================

  function handleLogin() {

    setlogin(true);

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );
  }


  // ==========================================
  // LOGOUT FUNCTION
  // ==========================================

  function handleLogout() {

    localStorage.removeItem(
      "isLoggedIn"
    );

    setlogin(false);

    setRegister(false);
  }


  // ==========================================
  // CART STATE
  // ==========================================

  const [cart, setCart] = useState([]);


  // ==========================================
  // ADD TO CART
  // ==========================================

  function addTocart(product) {

    setCart((prevCart) => {

      // Check karo product already cart mein hai
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );


      // Agar product already hai
      // to quantity +1 hogi
      if (existingProduct) {

        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity) + 1,
              }
            : item
        );
      }


      // Agar product new hai
      // to quantity 1 se start hogi
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });
  }


  // ==========================================
  // CART COUNT
  // ==========================================

  const cartCount = cart.reduce(
    (total, product) => {

      return (
        total +
        Number(product.quantity)
      );

    },
    0
  );


  // ==========================================
  // RETURN
  // ==========================================

  return (

    <>

      <div
        className={
          darkMode
            ? "app dark-mode"
            : "app light-mode"
        }
      >

        <BrowserRouter>


          {/* ======================================
              LOGIN / REGISTER SYSTEM
          ====================================== */}

          {!login ? (

            register ? (

              /* ==================================
                 REGISTRATION PAGE
              ================================== */

              <Registration
                onRegister={handleLogin}
              />

            ) : (

              /* ==================================
                 LOGIN PAGE
              ================================== */

              <Login
                onLogin={handleLogin}
                onRegister={() =>
                  setRegister(true)
                }
              />

            )

          ) : (

            /* ======================================
               MAIN WEBSITE
            ====================================== */

            <>


              {/* ==================================
                  NAVBAR
              ================================== */}

              <Navbar
                cartCount={cartCount}
                darkMode={darkMode}
                changeTheme={changeTheme}
                onLogout={handleLogout}
              />


              {/* ==================================
                  ROUTES
              ================================== */}

              <Routes>


                {/* ==================================
                    HOME
                ================================== */}

                <Route
                  path="/"
                  element={
                    <Home
                      addtocart={addTocart}
                    />
                  }
                />


                {/* ==================================
                    ABOUT
                ================================== */}

                <Route
                  path="/about"
                  element={
                    <About
                      addtocart={addTocart}
                    />
                  }
                />


                {/* ==================================
                    CATEGORIES
                ================================== */}

                <Route
                  path="/categories"
                  element={
                    <Categories
                      addTocart={addTocart}
                    />
                  }
                />


                {/* ==================================
                    CART
                ================================== */}

                <Route
                  path="/cart"
                  element={
                    <Cart
                      cart={cart}
                      setCart={setCart}
                    />
                  }
                />

              </Routes>



            



              {/* ==================================
                  FOOTER
              ================================== */}

              <Footer />

            </>

          )}

        </BrowserRouter>

      </div>

    </>

  );
}


export default App;

