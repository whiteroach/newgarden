import React from 'react'

const Footer = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className = "footer-wrapper">
                <p>{date}</p>
                <p>Created by Pietro, José and Ashik</p>
                <i class="fab fa-github"></i>
        </div>
    )
}

export default Footer
