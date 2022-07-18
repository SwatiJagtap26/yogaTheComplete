import React, { useState } from "react";
import { auth } from "../../firebase";
import {toast} from 'react-toastify';
import { useSelector } from "react-redux";
import "./Password.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
   const config ={
    url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
    handleCodeInApp : true,
   }

    await auth.sendPasswordResetEmail(email ,config)
    .then(() => {
        setEmail('')
        setIsLoading(false)
        toast.success('Check your email for password reset Link');
    })
    .catch((error) => {
      setIsLoading(false)
      toast.error(error.message);
      console.log("Error msg in  Forgot Password", error)
    })
  };
  return (
    <div className="Pass-container">
      <form onSubmit={handleSubmit}>
        {loading ? (
          <h1 className="text-danger">Loading</h1>
        ) : (
          <h1> Forgot Password </h1>
        )}
        <div>
          <label htmlFor="email">Enter Your Email Address</label>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              autoFocus
            />
          </div>

          <button>Submitt</button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPassword;
