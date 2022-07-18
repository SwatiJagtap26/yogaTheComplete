import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import { useRef } from "react";
import "./Auth.css";

import { useState, useContext } from "react";
import useInput from "../hooks/useInput";

import { useNavigate } from "react-router-dom";

import AuthContext from "../Stored/auth-context";

const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.includes("1");

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const authCtx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const dispatch = useDispatch();
  // adding validation

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loginHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // storing only data
    // fetch('https://yoga-asanas-default-rtdb.firebaseio.com/login.json',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   })
    // })

    // Adding authentication
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFPOJvmjdi1KlZqQP7j0-N_3w0UlIisuw";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFPOJvmjdi1KlZqQP7j0-N_3w0UlIisuw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setIsLoading(false);
        const resData = await res.json();
        if (!res.ok) {
          let errorMessage = "Authentication Failed!";
          throw new Error(errorMessage);
        }
        return resData;
      })
      // else {
      //   return res.json().then((data) => {
      //     // show an error msg on display
      //     let errorMessage = "Authentifiaction failed!";

      //     throw new Error(errorMessage);
      //   });
      // }

      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })

      .catch((err) => {
        alert(err.message);
      });
  };
  const handleClickEye = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  // forgot password

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const PasswordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <div>
      <h1 className="auth-heading">Welcome to Yoga Asanas!</h1>
      <main className="auth">
        <section>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={loginHandler}>
            <div className="control">
              <label htmlFor="email">Email</label>
              <div className={emailClasses}>
                <input
                  type="email"
                  id="email"
                  ref={emailInputRef}
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
              </div>
              {emailHasError && (
                <p className="error-text">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="control ">
              <label htmlFor="password">Password</label>

              <div className={PasswordClasses}>
                <div className="eyebtn">
                  <input
                    type={type}
                    id="password"
                    ref={passwordInputRef}
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                  />

                  <span onClick={handleClickEye}>
                    <Icon className="eye" icon={icon} size={24} />
                  </span>
                </div>
              </div>
              {passwordHasError && (
                <p className="error-text">Please enter a valid password.</p>
              )}
            </div>
            <div className="actions">
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Sending request....</p>}
              <button
                type="button"
                className="toggle"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
        <div></div>
      </main>
    </div>
  );
};

export default Auth;
