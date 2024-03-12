import axios from "axios";
import React, { useState, useEffect } from "react";

export default function IconBoard() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getIcon")
      .then((response) => setIcons(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="iconGrid">
      {icons.map((icon) => (
        <div key={icon.id} className="iconWrap">
          <img src={icon.icon} alt={icon.app} className="iconOfApp" />
        </div>
      ))}
    </div>
  );
}
