import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import "./Password.css";

const isEmail = (value) => value.includes("@");
const Password = (props) => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  let formIsValid = false;

  if (emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(emailValue);
    resetEmail();
   
     //const enteredEmail = emailInputRef.current?.value?.trim();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCFPOJvmjdi1KlZqQP7j0-N_3w0UlIisuw",
      {
        method: "POST",
        body: JSON.stringify({
          //email: enteredEmail,
          email: "swatijagtap2681998@gmail.com",
          requestType: "PASSWORD_RESET",
          //returnSecureToken: true,
          targetProjectId: "yoga--asanas-poc",
          //kind: "identitytoolkit#GetOobConfirmationCodeResponse",
          //oobCode: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (res) => {
        const resData = await res.json();
        if (!res.ok) {
          let errorMessage = "this email address is not found in database";
          throw new Error(errorMessage);
        }
        return resData;
      })

      .then((data) => {
        navigate("/");
        console.log(data);
        alert("check your email address to reset password");
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <div className="Pass-container">
      <form onSubmit={submitHandler}>
        <h1> Forgot Password ?</h1>
        <div>
          <label htmlFor="email">Enter Your Email Address</label>
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
            <p className="error-text">Please enter a valid email address.</p>
          )}
          <button>Submitt</button>
        </div>
      </form>
    </div>
  );
};
export default Password;
