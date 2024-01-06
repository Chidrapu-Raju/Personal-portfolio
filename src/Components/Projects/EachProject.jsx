import React from "react";

export const EachProject = ({name,description,index}) => {
    return (
        <div className="each-project">
            <div className="details">
                <h1>{name}</h1>
                <p>{description}</p>
                <button className="btn btn-light">View Project</button>
            </div>
            <div className="image">
                <img src={`image${index%3 + 2}.jpg`}></img>
            </div>
        </div>
    )
}