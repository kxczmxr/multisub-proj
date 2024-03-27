import React from "react";
import "./App.css";
import IconBoard from "./Components/IconBoard";
import Header from "./Components/Header";
import ActiveAppList from "./Components/ActiveAppList";
function App() {
  return (
    <>
      <ActiveAppList/>
      <IconBoard />
    </>
  );
}

export default App;
