import React from "react";
import "./Contact.scss";
import { Location, Messenger, Phone, Website } from "../../icons/icons";

export const Contact = () => {
    return (
        <div className="contact">
             <h1>Contact Us</h1>
             <div className="address each">
                <Location /><p className="text">Hyderabad</p>
             </div>
             <div className="phone each">
                <Phone /><p className="text">9449494949</p>
             </div>
             <div className="mail each">
                <Messenger /><p className="text">My email</p>
             </div>
             <div className="site each">
                <Website /><p className="text">any blog</p>
             </div>
        </div>
    );
}