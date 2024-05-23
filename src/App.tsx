import React, { useState } from "react";
import LandingPage from "./LandingPage";
import PublicFiles from "./userPage/PublicFiles";
import Homepage from './userPage/Homepage'
import '../style.css'

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      {isRegistered ? (
        <Homepage />
      ) : (
        <LandingPage setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default App;
