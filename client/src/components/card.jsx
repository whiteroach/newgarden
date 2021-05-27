import React from "react";

const Cards = (props) => {
  const del = () => {
    props.onDelete(props.id);
    console.log(props.id);
  };
  return (
    <div>
      <div className="dark-glass card">
        <h2>Name: {props.plantName}</h2>
        <img src={`/images/${props.pic}`} alt="flower" width="100" />
        <p>
          <i>quote</i>
        </p>
        <p>Type: {props.plantType}</p>
        <div className="card-body">
          <p>Description: {props.description}</p>
          <p>Added By: </p>
          <li>Name: {props.user} </li>
          <li>E-mail: {props.email} </li>
        </div>
        <div className="btn-container">
          <button type="button" className="card-btn" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
