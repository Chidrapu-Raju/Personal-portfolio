import React from "react";
import "./About.scss";

export const About = () => {
    return (
         <div className="about">
            <h1>About</h1>
            <div className="line"></div>
            <div className="details">
            <div className="circle"></div>
            <h1>My Bio</h1>
            <p>Hello there! I'm Raj chidarapu, a passionate UI/UX designer dedicated to creating exceptional digital experiences. With a keen eye for detail and a love for crafting intuitive interfaces, I thrive on transforming complex ideas into user-friendly designs.

</p>
            <button className="btn btn-warning">Learn More</button>
            </div>
            
         </div>
    )
}