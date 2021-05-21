import React from 'react'

const FormLayout = () => {
    let form = document.getElementById("form");

    form.addEventListener("mousemove", (e) => {
        
        let x = (window.innerWidth /2 - e.pageX) / 12;
        let y = (window.innerHeight / 1 - e.pageY) / 12;

        form.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    });

    form.addEventListener('mouseleave', function(){
        form.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
    return (
        <div>
            <form action="" id = "form">
                <h3>Flowers Project</h3>
                <input type = "text" placeholder = "Plant Name"></input>
                <input type = "text" placeholder = "Plant Type"></input>
                <textarea placeholder = "Description"></textarea>
                <input type = "submit" value = "Upload Picture"></input>
                <input type = "submit" value = "post"></input>
            </form>
        </div>
    )
}

export default FormLayout
