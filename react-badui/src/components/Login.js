import React from "react";
import Captcha from "./Captcha";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container mx-auto mt-10 max-w-md rounded-md bg-white p-3 pb-6 shadow-md">
      <form
        className="flex flex-col"
        id="login"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Username"
          id="username"
          data-lpignore="true" // hides lastpass icon
        />
        <label></label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          data-lpignore="true" // hides lastpass icon
        />
        <label></label>

        <Captcha></Captcha>
        <span className=" mt-4 flex justify-around">
          <FaLongArrowAltRight id="loginButton" />
          <button id="clearButton" type="reset">
            Reset
          </button>
        </span>
      </form>
    </div>
  );
};

export default Login;
