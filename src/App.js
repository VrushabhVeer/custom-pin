import { useState } from "react";
import "./App.css";
import pana from "./Assets/pana.png";
import Pin from "./components/Pin";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <div className="App">
      <img src={pana} alt="" />
      <div>
        <p>Code sent to +91 9087654321</p>
        <Pin length={5} setOtp={setOtp} />
        <p>{otp}</p>
        <p>
          Didn't recieve code? <span>Request again</span>
        </p>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
