import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formState, setForm] = useState({
    plantName: "",
    plantType: "",
    description: "",
    // pic:{},
  });

  const [successMsg, setSuccess] = useState("");
  const [picture, setPicture] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...formState,
      [e.target.name]: e.target.value,
    });
    // console.log(formState);
  };

  const handlePicChange = (e) => {
    // console.log(e.target.files[0]);
    setPicture(e.target.files[0]);
  };

  const sendToBackend = (e) => {
    e.preventDefault();
    // console.log(formState)
    console.log(picture);

    // Issue to solve ????

    const formData = new FormData();
    formData.append("textForm", formState);
    formData.append("pic", picture);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/flowerForm", formState, config)
      .then((response) => {
        console.log(response.data);
        setSuccess(response.data.msg);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <form onChange={handleChange} enctype="multipart/form-data"> */}
      <p>{successMsg}</p>
      <form onChange={handleChange}>
        {/* <form onChange={handleChange} onSubmit={sendToBackend}> */}
        <label for="plantName">Plant Name:</label>
        <input name="plantName" type="text" />
        <label for="plantType">Plant Type:</label>
        <input name="plantType" type="text" />
        <label for="description">Description:</label>
        <input name="description" type="text" />
        <label for="pic">Picture:</label>
        <input name="pic" type="file" onChange={handlePicChange} />
        <button type="submit" onClick={sendToBackend}>
          {" "}
          post{" "}
        </button>
        {/* <input type="" onSubmit={sendToBackend} value="post"/> */}
      </form>
    </div>
  );
};

export default Form;
