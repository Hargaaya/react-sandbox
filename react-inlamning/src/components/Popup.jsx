import React from "react";

const Popup = (props) => {
  return (
    <div className="Popup">
      <span>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
      </span>
      <button
        onClick={() => {
          props.accept(!true);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Popup;
