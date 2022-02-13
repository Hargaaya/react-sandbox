import React from "react";
import Captcha from "./Captcha";

const Login = () => {
  return (
    <div className="container mx-auto max-w-md rounded-sm bg-slate-200 p-3 shadow-md">
      <form className="flex flex-col" id="login">
        <input
          type="text"
          placeholder="Username"
          id="username"
          data-lpignore="true"
        />
        <label></label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          data-lpignore="true"
        />
        <label></label>

        <Captcha></Captcha>

        <input type="reset" type="submit" value="Clear form" id="clearButton" />
        <input type="button" value="Log in" id="loginButton" />
      </form>
    </div>
  );
};

export default Login;
