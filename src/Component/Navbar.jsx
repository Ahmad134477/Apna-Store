
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Vanimge from "../assets/Vanimge.png";

import {
  FaMoon,
  FaSun,
  FaHome,
  FaBoxOpen,
  FaThLarge,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

function Navbar({
  cartCount,
  darkMode,
  changeTheme,
  onLogout
}) {


  const [showLogoutModal, setShowLogoutModal] =
    useState(false);


 

  function handleLogoutClick() {


    setShowLogoutModal(true);

  }


  

  function handleCancelLogout() {

    // Modal close
    setShowLogoutModal(false);

  }



  function handleConfirmLogout() {

    // Pehle modal close
    setShowLogoutModal(false);

   
    onLogout();

  }


  return (
    <>
      {/* ==========================================
          OFFER MOVING BAR
      ========================================== */}

      <marquee
        direction="right"
        className="van-moving"
      >

        <div className="van-content">

          <span className="ahmad-text">
            50% offer
          </span>

          <img
            src={Vanimge}
            alt="van"
            className="van-image"
          />

        </div>

      </marquee>


    
      <nav
        className={
          darkMode
            ? "navbar dark-navbar"
            : "navbar"
        }
      >



        <div className="logo-section">

          <div className="logo">
            🛍️
          </div>

          <div className="brand">

            <h2
              style={{
                color: darkMode
                  ? "white"
                  : "black"
              }}
            >
              Apna Store
            </h2>

            <span>
              Online Shopping
            </span>

          </div>

        </div>


  

        <div className="nav-menu">


          {/* HOME */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >

            <FaHome />

            <span>
              Home
            </span>

          </NavLink>


       

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >

            <FaBoxOpen />

            <span>
              Products
            </span>

          </NavLink>


         

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "nav-item active"
                : "nav-item"
            }
          >

            <FaThLarge />

            <span>
              Categories
            </span>

          </NavLink>


         

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "nav-item cart-item active"
                : "nav-item cart-item"
            }
          >

            <div className="cart-icon">

              <FaShoppingCart />

              {cartCount > 0 && (

                <span className="cart-badge">
                  {cartCount}
                </span>

              )}

            </div>

            <span>
              Cart
            </span>

          </NavLink>


     

          <button
            type="button"
            className="logout-btn"
            onClick={handleLogoutClick}
            title="Logout"
          >

            <FaSignOutAlt />

            <span>
              Logout
            </span>

          </button>


        </div>



        <button
          type="button"
          className="theme-btn"
          onClick={changeTheme}
          title={
            darkMode
              ? "Light Mode"
              : "Dark Mode"
          }
        >

          <span className="theme-icon">

            {darkMode
              ? <FaSun />
              : <FaMoon />
            }

          </span>

        </button>


      </nav>



      {showLogoutModal && (

        <div
          className="logout-modal-overlay"
          onClick={handleCancelLogout}
        >

          <div
            className={
              darkMode
                ? "logout-modal logout-modal-dark"
                : "logout-modal"
            }
            onClick={(e) =>
              e.stopPropagation()
            }
          >


       

            <button
              type="button"
              className="logout-modal-close"
              onClick={handleCancelLogout}
            >
              <FaTimes />
            </button>


        

            <div className="logout-modal-icon">
              <FaSignOutAlt />
            </div>


          

            <h2>
              Logout?
            </h2>



            <p>
              Are you sure you want to logout?
            </p>

            <span className="logout-modal-subtitle">
              You will need to login again to access your account.
            </span>


          

            <div className="logout-modal-buttons">

           

              <button
                type="button"
                className="logout-cancel-btn"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>



              <button
                type="button"
                className="logout-confirm-btn"
                onClick={handleConfirmLogout}
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;

