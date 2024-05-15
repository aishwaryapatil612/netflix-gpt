import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        ></img>
      </div>
      <form className="bg-black absolute p-12 my-36 w-3/12 right-0 left-0 mx-auto text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="p-3 my-4 w-full bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-700 rounded"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? Sign up Now"
            : "Already User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
