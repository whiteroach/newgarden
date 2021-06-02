import React, { useState, useEffect } from "react";
import axios from "axios";
import JwtDecode from "jwt-decode";

const FlowerForm = () => {
  const [successMsg, setSuccess] = useState("");
  const [picture, setPicture] = useState();
  const [formState, setForm] = useState({
    plantName: "",
    plantType: "",
    description: "",
    localId: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("currentToken");
    console.log(user);
    const decode = JwtDecode(user);
    console.log(decode);

    setForm({
      ...formState,
      localId: decode.username || null,
    });
  }, []);

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
        // const successMsg = response.data
        setSuccess(response.data.msg);
        window.location.href = "/main";
      })
      .catch((error) => console.log(error));
    // console.log(formData,'formData here')
  };

  return (
    <div className="dark-glass card card-form">
      {/* <p>{successMsg}</p> */}
      <form className="card-form-form" onSubmit={sendToBackend}>
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
        <button type="submit" className="btn">
          {" "}
          Add{" "}
        </button>
      </form>
      <button className="gotobtn">
        <i className="fas fa-arrow-up"></i>{" "}
      </button>
    </div>
  );
};

export default FlowerForm;
