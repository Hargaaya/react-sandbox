import React from "react";
import { RiRefreshFill } from "react-icons/ri";

const Captcha = () => {
  return (
    <div className="flew-row mx-auto flex h-20 w-72 justify-between rounded-md bg-slate-300 p-6 shadow-md">
      <input type="checkbox" id="completedCaptcha" className="h-6 w-6" />
      <span className="text-xl font-medium text-white">I am a robot</span>
      <RiRefreshFill className="text-4xl text-white" />
    </div>
  );
};

export default Captcha;
