import React from 'react'

const Cards = (props) => {
    const del = ()=>{
      props.onDelete(props.id)
      console.log(props.id);
    }
    return (
        <div>
            <div className="dark-glass card">
                        <h2>{ props.plantName }</h2>
                        {/* <img src={"/images/"+ {pic}}/> */}
                        <img src={`/images/${props.pic}`}width="100"/>
                        {/* <img src="/images/1621503877627_ps-wb-2-pic.jpg"/> */}
                        <p><i>quote</i></p>
                        <p>{ props.plantType }</p>
                        <div className="card-body">
                            <p>{ props.description}</p>
                        </div>
                        <div className = "btn-container">
                            <button type="button" className = "card-btn" onClick={del}>delete</button>
                        </div>
            </div>
        </div>
      
    
  );
};
export default Cards;
