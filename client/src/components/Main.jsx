import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";

const Main = () => {
  const [flowerCards, setCards] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();
  useEffect(() => {
    const user = localStorage.getItem("currentToken");
    axios.get("http://localhost:8080/main").then((res) => {
      console.log(res.data);
      setCards(res.data);
      setDeleteMsg(null);
    });
  }, []);

  const deletePlant = (id) => {
    axios.delete("/main/delete/" + id).then((res) => {
      // console.log(res.data.msg);
      setDeleteMsg(res.data.msg);
    });
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <a href="/about" className="navbarLink">
              About
            </a>
          </li>
          <li>
            <a href="/main" className="navbarLink">
              Flowers
            </a>
          </li>
          <li>
            <a href="/gallery" className="navbarLink">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
      <div className="card-wrapper">
        <p>{deleteMsg} </p>
        {flowerCards.map((flower, index) => {
          console.log(flower.added_by);
          console.log(flower, "from front");

          return (
            <Card
              key={flower._id}
              id={flower._id}
              plantName={flower.plantName}
              plantType={flower.plantType}
              description={flower.description}
              user={flower.added_by.username}
              email={flower.added_by.email}
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
