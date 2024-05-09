import React from "react";
export default function Header() {
    return (
        <div className="header-container">
            {/* <img src="./gannione.jpg" alt="image is loading" /> */}
            <h3 className="head-image">Header Image</h3>
            <h3 className="head-name">Hemanth Nalla</h3>
            <h5 className="head-job">Frontend Developer</h5>
            <h5 className="head-loc">vizag,India</h5>
            <div className="button-container">
            <button className="email-button">Email</button>
            <button className="linkedin-button">LinkedIn</button>

            </div>
        </div>
    );
}