import React from "react";

export const AddProject = ({setProjects}) => {

    const addProjects = (e) => {
        e.preventDefault();
        alert("Project Created Successfully,Navigate to Project Section");
        setProjects(prev => [...prev,{
            name: document.getElementById('exampleInputName1').value,
            link: document.getElementById('exampleInputLink1').value,
            description: document.getElementById('exampleFormControlDescription').value,
        }])
    }
    return (
         <div className="add-project">
            <h1>Add Project</h1>
            <div className="line"></div>
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