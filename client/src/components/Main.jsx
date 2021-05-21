import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";

const Main = () => {
  const [flowerCards, setCards] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();
  useEffect(() => {
    axios.get("/main").then((res) => {
      // console.log(res.data);
      setCards(res.data);
    });
  }, [deleteMsg]);

  const deletePlant = (id) => {
    axios.delete("/main/delete/" + id).then((res) => {
      console.log(res.data.msg);
      setDeleteMsg(res.data.msg);
    });
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbarList">
          <li href="#" className="navbarLink">
            ABOUT
          </li>
          <li href="#" className="navbarLink">
            CONTACT
          </li>
          <li href="#" className="navbarLink">
            GALLERY
          </li>
        </ul>
      </nav>
      <div className="card-wrapper">
        {flowerCards.map((flower, index) => {
          return (
            <Card
              key={flower._id}
              plantName={flower.plantName}
              plantType={flower.plantType}
              description={flower.description}
              pic={flower.plantPic}
              onDelete={deletePlant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
