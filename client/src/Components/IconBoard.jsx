import React, { useState, useEffect } from "react";
import axios from "axios";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";
export default function IconBoard({}) {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    let totalPrice = 0;
    icons.forEach((icon) => {
      if (icon.isactive) {
        totalPrice += icon.sub;
      }
    });
    setTotalPrice(totalPrice);
  }, [icons]);
 
  const handleIconClick = async (iconId, sub, isactive) => {
    try {
      const response = await axios.post("http://localhost:3001/updateIcon", {
        iconId,
        isactive: !isactive,
      });

      if (response.status === 200) {
        const updatedIcons = icons.map((icon) => {
          if (icon._id === iconId) {
            return { ...icon, isactive: !isactive };
          }
          return icon;
        });
        setIcons(updatedIcons);
        console.log("Icon state updated successfully!");
      }
    } catch (error) {
      console.error("Error updating icon state:", error);
    }
  };

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
    <div>
      <div className="iconGrid">
        {icons.map((icon) => (
          <div
            className="iconWrap"
            key={icon._id}
            onClick={() => handleIconClick(icon._id, icon.sub, icon.isactive)}
          >
            <img
              src={icon.icon}
              alt={icon.app}
              className={`iconOfApp ${icon.isactive ? "IconActivated" : ""}`}
            />
            <p>Price: ${icon.sub}</p>
            <p>Status: {icon.isactive ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}
