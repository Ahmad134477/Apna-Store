import { Link } from "react-router-dom";

import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* Animated top line */}
      <div className="footer-line"></div>

      <div className="footer-container">

        {/* Store Info */}
        <div className="footer-box">
          <h2>
            <span> 🛍️</span> Apna Store
          </h2>

          <p>
            Your favorite online store for amazing products,
            great quality and beautiful shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

        {/* Quick Links */}

  <h3>Quick Links</h3>

  <Link to="/">Home</Link>
  <Link to="/about">Products</Link>
  <Link to="/categories">Categories</Link>
  <Link to="/cart">Cart</Link>

        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📧 apnastore@gmail.com</p>
          <p>📞 +92 300 1234567</p>
          <p>📍 Pakistan</p>
        </div>

        {/* Social */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Apna Store | Made with <FaHeart />Ahmii ❤️
        </p>
      </div>

    </footer>
  );
}

export default Footer;

