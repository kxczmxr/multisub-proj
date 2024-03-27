import React, { useEffect, useState } from "react";

const ActiveAppList = () => {
  const [appList, setAppList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/getIcon")
      .then((response) => response.json())
      .then((data) => {
        const activeApps = data.filter((icon) => icon.isactive === true);
        setAppList(activeApps);
        const total = activeApps.reduce((sum, icon) => sum + icon.sub, 0);
        setTotalPrice(total);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Active App List</h1>
      <table className="applist-table">
        <thead>
          <tr>
            <th>APP</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {appList.map((icon) => (
            <tr key={icon.id}>
              <td>{icon.app}</td>
              <td>${icon.sub}</td>
            </tr>
          ))}
          <tr>
            <td>TOTAL:</td>
            <td>${totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveAppList;
