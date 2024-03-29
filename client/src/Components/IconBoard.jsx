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

  // useEffect(() => {
  //   let totalPrice = 0;
  //   icons.forEach((icon) => {
  //     if (icon.isactive) {
  //       totalPrice += icon.sub;
  //     }
  //   });
  //   setTotalPrice(totalPrice);
  // }, [icons]);
  useEffect(() => {
    console.log("icons", icons);
  }, [icons]);
  const handleIconClick = async (iconId, isactive) => {
    try {
      const response = await axios.post("http://localhost:3001/updateIcons", {
        iconId,
        isactive: !isactive,
      });

      if (response.status === 200) {
        setIcons((prev) =>
          prev.map((icon) =>
            icon._id === iconId ? { ...icon, isactive: !icon.isactive } : icon
          )
        );
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
            onClick={() => handleIconClick(icon._id, icon.isactive)}
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
      {/* <div>
        <h2>Total Price: ${totalPrice}</h2>
      </div> */}
    </div>
  );
}
