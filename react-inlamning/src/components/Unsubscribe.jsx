import React from "react";
import Popup from "./Popup";

const Unsubscribe = ({ name }) => {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <div className="Unsubscribe">
      <button onClick={() => setShowPopup(true)}>Unsubscribe</button>
      {showPopup && name && (
        <Popup
          title={`I'm afraid I can't let you do that ${name} 😌`}
          message="Just accept the fact that you can't unsubscribe from our newsletter, the sooner you do, the easier it gets!"
          accept={setShowPopup}
        />
      )}
      {showPopup && !name && <Popup title="You need to sign up first..." accept={setShowPopup} />}
    </div>
  );
};

export default Unsubscribe;
