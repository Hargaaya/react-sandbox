import React from "react";
import Captcha from "./Captcha";

const Login = () => {
  return (
    <div className="container mx-auto mt-10 max-w-md rounded-sm bg-white p-3 shadow-md">
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

        <input type="reset" type="submit" value="Clear form" id="clearButton" />
        <input type="button" value="Log in" id="loginButton" />
      </form>
    </div>
  );
};

export default Login;
