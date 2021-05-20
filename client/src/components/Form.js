import React, {useState} from 'react'
import axios from 'axios';


const Form = () => {
    const [formState , setForm] = useState({
        plantName:'',
        plantType:'',
        description:'',
        // pic:{},
    })

    const [successMsg, setSuccess] = useState('')
    const [picture, setPicture] = useState();

    const handleChange = (e) => {
        // e.preventDefault();
        setForm({
            ...formState,
            [e.target.name]:e.target.value
        })
        // console.log(formState)
    }
    const handlePicChange = (e) =>{
        // console.log(e.target.files)
        setPicture(e.target.files[0])
    }

    
    const sendToBackend = (e) => {
        e.preventDefault();
        console.log(formState)
        const formData = new FormData()
        // formData.append('plantName', formState.plantName)  
        // formData.append('plantType', formState.plantType)  
        // formData.append('description', formState.description)  
        formData.append('formState', JSON.stringify(formState))
        

        formData.append('pic', picture)       
        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        // console.log(formState)
        axios.post('http://localhost:8080/flowerForm', formData, config)
        .then(response=>{
            // console.log(response.data);
            setSuccess(response.data.msg);
        })   
        .catch(error=>console.log(error))
        // console.log(formData,'formData here')
    }

    return (
        <div>
            {/* <form onChange={handleChange} enctype="multipart/form-data"> */}
            <p>{successMsg}</p>
            {/* <form onChange={handleChange} > */}
            <form onSubmit={sendToBackend}>
                <label for="plantName">Plant Name:</label>
                <input name="plantName" type="text" onChange={handleChange}/>
                <label for="plantType">Plant Type:</label>
                <input name="plantType" type="text" onChange={handleChange}/>
                <label for="description">Description:</label>
                <input name="description" type="text" onChange={handleChange}/>
                <label for="pic">Picture:</label>
                <input name="pic" type="file" onChange={handlePicChange}/>
                {/* <button type="button" onClick={sendToBackend}> post </button> */}
                <button type="submit"> post </button>
                {/* <input type="" onSubmit={sendToBackend} value="post"/> */}
            </form>
        </div>
    )
}

export default Form
