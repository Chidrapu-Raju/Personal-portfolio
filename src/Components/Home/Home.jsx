import React from "react";
import "./Home.scss";
import { Details } from "./Details";

export const Home = () => {
    return (
        <React.Fragment>
          <div className="home container">
            <Details />
          </div>
        </React.Fragment>
    )
}