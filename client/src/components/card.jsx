import React from "react";
const Cards = (this.props.) => {
  return (
    <div>
      <div className="dark-glass card">
        <h2>{props.plantName}</h2>
        {/* <img src={"/images/" + pic} alt="flower" /> */}
        <img src={`/images/${props.pic}`} alt="flower" width="120px" height="100px" />
        {/* <img src="/images/1621503877627_ps-wb-2-pic.jpg" /> */}
        <p>
          <i>quote</i>
        </p>
        <p>{props.plantType}</p>
        <div className="card-body">
          <p>{props.description}</p>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="card-btn"
            onClick={() => onDelete(key)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
