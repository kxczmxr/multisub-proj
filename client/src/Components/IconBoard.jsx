import axios from "axios";
import React, { useState, useEffect } from "react";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";

export default function IconBoard() {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getIcon")
      .then((response) => {
        setIcons(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="loadingCont">
        <OrbitProgress
          variant="dotted"
          color="#020202"
          size="small"
          className="loadingScr"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="iconGrid">
    {icons.map((icon) => (
      <div
        key={icon.id}
        className={"iconWrap"}
        onClick={null}
      >
        <img src={icon.icon} alt={icon.app} className="iconOfApp" />
      </div>
    ))}
  </div>
  );
}
