import React, { useContext } from "react";
import { ProjectContext } from "../../Contexts/useProject";
import "./Projects.scss";
import { EachProject } from "./EachProject";

export const Projects = () => {
    const {projects} = useContext(ProjectContext);

    return (
    
            <div className="projects">
                <h1>Projects</h1>
                <div className="list container">
                {projects.map((each,index) => <EachProject name={each.name} description={each.description} index={index} />)} 
                </div>
            </div>
            
     
    )
}