import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaPlane,
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Icon links */}
      {/* <div className="first-line"> */}
        <div className="navbar-random-icon">
          {/* Replace 'FaRandomIcon' with your desired random icon */}
          <FaPlane />
        </div>

        {/* Icon links */}
        <div className="navbar-icons">
          {/* Instagram */}
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          {/* Youtube */}
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
        </div>

        {/* Whatsapp link with phone number */}
        <div className="navbar-whatsapp">
          <div>
            <FaPhone /> +123456789
          </div>
          <div>
            <FaWhatsapp /> 987654321
          </div>
        </div>
      {/* </div> */}
      <div className="navbar-links">
        {/* Route links */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
