import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <HelloWorld />
    </div>
  );
}

export default App;
