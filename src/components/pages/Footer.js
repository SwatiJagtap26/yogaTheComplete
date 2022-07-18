import "./Footer.css";
import { Link } from "react-router-dom";
import AuthContext from "../Stored/auth-context";
import { useContext } from "react";

const Footer = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const footerhandler = () => {
    if (!isLoggedIn) {
      alert("Please loging first");
    }
  };

  return (
    <div className="footer-container-main">
      <div className="footer-container">
        <div className="footer-head">
          <h1>Yoga Asanas</h1>
          <p>Far far away, behind the word mountains, far from the countries</p>
          <ul className="footer-icons">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </ul>
        </div>
        <div className="footer-widget">
          <h2>Explore</h2>
          <ul className="footer-links" onClick={footerhandler}>
            <li>
              <Link to={isLoggedIn && "/"}>Home</Link>
            </li>
            <li>
              <Link to={isLoggedIn && "/about"}>About</Link>
            </li>
            <li>
              <Link to={isLoggedIn && "/trainee"}>Trainee</Link>
            </li>
            <li>
              <Link to={isLoggedIn && "/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={isLoggedIn && "/basicform"}>Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget2">
          <h1>Have a questions?</h1>
          <ul>
            <li>
              <i className="icon fa fa-map marker"></i>
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li>
              <i className="icon fa fa-phone"></i>
              <span>+2 392 3929 210</span>
            </li>
            <li>
              <i className="icon fa fa-paper-plane pr-4"></i>
              <span> info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright ©2022 All rights reserved </p>
    </div>
  );
};
export default Footer;
