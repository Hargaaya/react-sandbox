import React from "react";
import { RiRefreshFill } from "react-icons/ri";
import CaptchaTask from "./CaptchaTask";

const Captcha = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="mx-auto mt-4 flex w-64 items-center justify-between rounded-md border-2 border-slate-600/50 bg-white p-3 shadow-md">
      <div className="relative flex flex-row">
        <input
          type="checkbox"
          id="completedCaptcha"
          className="h-6 w-6"
          onClick={() => setChecked(!checked)}
        />
        <p className="pl-2 text-lg font-medium text-slate-600">I'm a robot</p>
        {checked ? <CaptchaTask /> : ""}
      </div>

      <RiRefreshFill className=" text-5xl text-blue-500" />
    </div>
  );
};

export default Captcha;
