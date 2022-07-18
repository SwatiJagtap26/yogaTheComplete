import { Link } from "react-router-dom";

import "./Navigation.css";

import { useContext } from "react";
import AuthContext from "../Stored/auth-context";
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <header className="headerNav">
        <Link to="/">
          <div className="logo">Yoga Asanas</div>
        </Link>
        

        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/about">About</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/trainee">Trainee</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                {" "}
                <Link to="/basicform">Feedback</Link>
              </li>
            )}
            {isLoggedIn && (
              <button className="btnLogout" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </ul>
        </nav>

        {/* )} */}
      </header>
    </div>
  );
};
export default Navigation;
