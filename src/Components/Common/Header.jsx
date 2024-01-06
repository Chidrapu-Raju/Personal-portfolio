import React from "react";
import "./Common.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
         
        <div className="header">
            <div className="left">
                <p>Raj Chidarapu</p>
            </div>
            <div className="right">
                <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/projects">Projects</Link>
            </div>
        </div>
  
    )
}