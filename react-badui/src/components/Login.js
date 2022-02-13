import React from "react";
import Captcha from "./Captcha";

const Login = () => {
  return (
    <div className="container mx-auto mt-10 max-w-md rounded-sm bg-white p-3 pb-6 shadow-md">
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
          <input type="button" value="Log in" id="loginButton" />
          <input
            type="reset"
            type="submit"
            value="Clear form"
            id="clearButton"
          />
        </span>
      </form>
    </div>
  );
};

export default Login;
