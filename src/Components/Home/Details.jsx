import React from "react";
import { Link } from "react-router-dom";

export const  Details = () => {
    return (
         <div className="details">
            <p>UI/UX Designer</p>
            <h1>Hello, my name is Raj Chadirapu</h1>
            <p>Some short text about yourself</p>
            <div className="buttons">
                <Link to="/projects" className="btn btn-warning" >Projects</Link>
                <button className="btn btn-light">LinkedIn</button>
            </div>
         </div>
    )
}