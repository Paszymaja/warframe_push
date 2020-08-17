import React from "react";
import WarframePush from "./WarframePush";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 style={{ padding: "30px" }} className="text-center">
        Warframe push
      </h1>
      <WarframePush />
    </div>
  );
}

export default App;
