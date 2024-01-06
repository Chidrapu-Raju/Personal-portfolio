import React, { useContext } from "react";
import "./Home.scss";
import { Details } from "./Details";
import { AddProject } from "./AddProject";
import { ProjectContext } from "../../Contexts/useProject";

export const Home = () => {

    const {projects,setProjects} = useContext(ProjectContext);

    return (
       
          <div className="home">
         
<img src="image1.jpg"></img>
            
            <div className="first container">
            <Details />
            </div>

            <div className="second">
                <AddProject setProjects={setProjects} />
            </div>
            

          </div>
         
    )
}