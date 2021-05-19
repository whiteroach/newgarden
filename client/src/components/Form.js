import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [formState, setForm] = useState({
    plantName: "",
    plantType: "",
    description: "",
    // pic: {},
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendToBackend = (e) => {
    e.preventDefault();

    console.log(formState);
    axios
      .post(`http://localhost:8080/flowerForm`, { formState })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <form onChange={handleChange} encType="multipart/form-data"> */}
      <form onChange={handleChange}>
        <label for="plantName"></label>
        <input name="plantName" type="text"></input>
        <label for="plantType"></label>
        <input name="plantType" type="text"></input>
        <label for="description"></label>
        <input name="description" type="text"></input>
        {/* <label for="pic"></label>
        <input name="pic" type="file"></input> */}
        {/* <input type="submit" onClick={sendToBackend} value="post" /> */}
        <button type="submit" onClick={sendToBackend}>
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
