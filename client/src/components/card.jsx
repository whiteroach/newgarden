import React from 'react'
const Cards = ({key,plantName, plantType, description, pic}) => {
    return (
        <div>
            <div className="dark-glass card">
                        <h2>{ plantName }</h2>
                        {/* <img src={"/images/"+ {pic}}/> */}
                        <img src={`/images/${pic}`}/>
                        {/* <img src="/images/1621503877627_ps-wb-2-pic.jpg"/> */}
                        <p><i>quote</i></p>
                        <p>{ plantType }</p>
                        <div className="card-body">
                            <p>{ description}</p>
                        </div>
                        <div className = "btn-container">
                            <button className = "card-btn">MORE</button>
                        </div>
            </div>
        
        <div className="btn-container">
          <button className="card-btn">MORE</button>
        </div>
      </div>
  );
};
export default Cards;
