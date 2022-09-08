import React from "react";

const Signup = (props) => {
  const [signedUp, setSignedUp] = React.useState(false);

  function confirmSignup(e) {
    e.preventDefault();
    props.setSignupInfo({
      name: e.target.name.value,
      email: e.target.email.value,
    });
    if (e.target.email.value) setSignedUp(true);
  }

  return (
    <div className="Signup">
      {!signedUp && (
        <form onSubmit={confirmSignup}>
          <input type="text" name="name" placeholder="Firstname Lastname" />
          <input type="email" name="email" placeholder="Your Email" />
          <button type="submit">Sign up</button>
        </form>
      )}
      {signedUp && (
        <div>
          <h3>Thanks for subscribing to our garbage {props.name}! </h3>
          <p>We promise to fill your inbox with the most unthinkable garbage 😊</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
