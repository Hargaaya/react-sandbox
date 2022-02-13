import React from "react";

const CaptchaTask = ({ targetItems }) => {
  return (
    <div className="absolute top-10 right-10 rounded-md border border-slate-500/50 bg-white shadow-md">
      <header className="bg-blue-500">
        <h2>Select all images with a {targetItems}</h2>
      </header>
    </div>
  );
};

CaptchaTask.defaultProps = {
  targetItems: "masked turtle",
};

export default CaptchaTask;
