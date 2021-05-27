import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [formState, setForm] = useState({
    plantName: "",
    plantType: "",
    description: "",
    localId: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setForm({
      ...formState,
      localId: user._id || null,
    });
  }, []);
  const [successMsg, setSuccess] = useState("");
  const [picture, setPicture] = useState();

  const handleChange = (e) => {
    setForm({
      ...formState,
      [e.target.name]: e.target.value,
    });
    // console.log(formState)
  };
  const handlePicChange = (e) => {
    // console.log(e.target.files)
    setPicture(e.target.files[0]);
  };

  const sendToBackend = (e) => {
    e.preventDefault();
    console.log(formState);
    const formData = new FormData();
    formData.append("plantName", formState.plantName);
    formData.append("plantType", formState.plantType);
    formData.append("description", formState.description);
    formData.append("pic", picture);
    formData.append("localId", formState.localId);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    // console.log(formState)
    axios
      .post("http://localhost:8080/flowerForm", formData, config)
      .then((response) => {
        // console.log(response.data);
        setSuccess(response.data.msg);
        window.location.href = "/main";
      })
      .catch((error) => console.log(error));
    // console.log(formData,'formData here')
  };

  return (
    <div>
      <p>{successMsg}</p>
      <form onSubmit={sendToBackend}>
        <label for="plantName">Plant Name:</label>
        <input name="plantName" type="text" onChange={handleChange} />
        <label for="plantType">Plant Type:</label>
        <input name="plantType" type="text" onChange={handleChange} />
        <label for="description">Description:</label>
        <input name="description" type="text" onChange={handleChange} />
        <label for="pic">Picture:</label>
        <input name="pic" type="file" onChange={handlePicChange} />
        {/* <input
          type="hidden"
          value={}
          name="localId"
          onChange={handleChange}
        /> */}
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default Form;
