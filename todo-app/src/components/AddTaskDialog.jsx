import { useEffect } from "react";

const AddTaskDialog = ({handleCancel,handleSubmit,changeHandlers,values}) => {

    useEffect(()=> {

        const priorities = document.querySelectorAll(".priority")
        priorities.forEach(pr => {
            pr.classList.remove("active")
            pr.checked = false;
        })

       if (values.priority === "green") {
         const low = document.getElementById("low");
         low.classList.add("active");
         low.checked = true;
       } else if (values.priority === "yellow") {
         const medium = document.getElementById("medium");
         medium.classList.add("active");
         medium.checked = true;
       } else if(values.priority === "red"){
         const high = document.getElementById("high")
         high.classList.add("active")
         high.checked = true
       } else {
         return
       }
    })

    return (
  
      <>
        <dialog id="taskDialog" className="dialog" >
        <form method="dialog">
          <div className="form-group">
            <input type="text" id="project-name" name="project-name" placeholder="Project name" required onChange={changeHandlers[0]} value={values.project}/>
          </div>
          <div className="form-group">
            <input type="text" id="task-name" name="task-name" placeholder="Task" required onChange={changeHandlers[1]} value = {values.task}/>
          </div>
          <div className="form-group">
            <textarea id="description" name="description" placeholder="Enter description" onChange={changeHandlers[2]} value={values.description}></textarea>
          </div>
  
          <div className="form-group-priority">
            <div id="radio-buttons">
              <input type="radio" id="low" className="priority low" value="green" onChange={changeHandlers[4]}/>
              <input type="radio" id="medium" className="priority medium" value="yellow" onChange={changeHandlers[4]}/>
              <input type="radio" id="high" className="priority high" value="red" onChange={changeHandlers[4]}/>
            </div>
            <div className="form-group-date">
              <label htmlFor="due-date">Due Date</label>
              <input type="date" id="due-date" min="2024-07-1" max="2025-01-01" value = {values.date} onChange={changeHandlers[3]}/>
            </div>
          </div>
          <div className="Taskbuttons">
            <button type="button" id="taskCancel" onClick = {handleCancel}>Cancel</button>
            <button type="button" id="taskSave" onClick = {handleSubmit}>Save</button>
          </div>
        </form>
      </dialog>
      </>
    )
  
}

export default AddTaskDialog;