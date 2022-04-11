import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [state, setState] = useState("false");
  
  const changePara = () => {
    setState("true");    
  };
  
  if (state === "true") {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={changePara}>
        Click
      </button>
    </div>
  );
}


export default App;
