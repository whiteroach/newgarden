import React from "react";
const Cards = () => {
  return (
    <div>
      <div className="dark-glass card">
        <h2>{FlowerName}</h2>
        <p>
          <i>{Quote}</i>
        </p>
        <div className="card-body">{Description}</div>
        <div className="btn-container">
          <button className="card-btn">MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
