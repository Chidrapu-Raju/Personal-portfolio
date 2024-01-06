import React from "react";
import { Instagram, LinkedIn,Messenger } from "../../icons/icons";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
             <Instagram />
             <LinkedIn />
             <Messenger />
            </div>
            <div className="copyright">
                <p>Copyright @2024 All rights reserved</p>
            </div>
            <img src="lastLine.jpg"></img>
        </div>
    )
}