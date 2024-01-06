import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProject = ({setProjects}) => {

    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    const addProjects = (e) => {
        e.preventDefault();
        const name = document.getElementById('exampleInputName1').value;
        const link = document.getElementById('exampleInputLink1').value;
        const description =  document.getElementById('exampleFormControlDescription').value;
        
        if(name == "" || link == "" || description == ""){
            setMessage("Fields should not be empty");
        }
        else{

            setProjects(prev => [...prev,{
                name: name,
                link: link,
                description: description
            }]);

            navigate('/projects');

        }

        
        
    }
    return (
         <div className="add-project">
            <h1>Add Project</h1>
            <div className="line"></div>
            { message && <div className="alert alert-danger">{message}</div> }
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Project Name</label>
    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"  ></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Project Link</label>
    <input type="text" class="form-control" id="exampleInputLink1" ></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-warning" onClick={addProjects}>Submit</button>
</form>
         </div>
    )
}