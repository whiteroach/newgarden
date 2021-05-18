import React, {useState} from 'react'

const Form = () => {
    const handleChange = (e) => {
        
    }
    return (
        <div>
            <form onChange={handleChange}>
                <label for="plantName"></label>
                <input name="plantName" type="text"></input>
                <label for="plantType"></label>
                <input name="plantType" type="text"></input>
                <label for="description"></label>
                <input name="description" type="text"></input>
                <label for="pic"></label>
                <input name="pic" type="file"></input>
                <button type="submit"onSubmit={}>post</button>
            </form>
        </div>
    )
}

export default Form
