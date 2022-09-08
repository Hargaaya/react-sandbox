import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Unsubscribe from "./components/Unsubscribe";

function App() {
  const [signupInfo, setSignupInfo] = React.useState({ name: null, email: null });

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Signup">Sign up</Link>
          <Link to="/Unsubscribe">Unsubscribe</Link>
        </nav>
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup setSignupInfo={setSignupInfo} name={signupInfo.name} />} />
            <Route path="/Unsubscribe" element={<Unsubscribe name={signupInfo.name} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
