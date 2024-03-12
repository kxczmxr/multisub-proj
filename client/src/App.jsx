import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getIcon")
      .then((icons) => setIcons(icons.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <img src={logo} alt="adsf" className="App-logo" />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>app</th>
            <th>sub</th>
          </tr>
        </thead>
        <tbody>
          {icons.map((icon) => {
            return (
              <tr>
                <td>{icon._id}</td>
                <td>{icon.app}</td>
                <td>{icon.sub}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
