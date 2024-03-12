import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import IconBoard from "./Components/IconBoard";
function App() {
  return (
    <div>
      <img src={logo} alt="adsf" className="App-logo" />
      <IconBoard />
    </div>
  );
}
export default App;
