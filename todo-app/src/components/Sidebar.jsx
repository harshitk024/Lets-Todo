
const TaskFilterLine = ({task,handleClick}) => {

    return (

        <li id = {task.id} onClick={() => handleClick(task.label)}>
            {task.svg}
            {task.label}
        </li>
    )
}

const TaskFilter = ({tasksFilterList,handleClick}) => {

   console.log(tasksFilterList);
   

    return(
        <>
         <div className="list">
            <ul id = "task-item-list">
              {tasksFilterList.map((task) => <TaskFilterLine key = {task.id} task = {task} handleClick={handleClick} />)}
            </ul>
          </div>
        </>
    )
}

const InputProject = ({handleSubmit}) => {

    return(
        <li>
            <form id = "pro-input-form">
                <input type="text" id = "pro-input" placeholder="Create Project"/>
                <div id = "project-submit">
                    <button id="project-cancel-button" >Cancel</button>
                    <button id = "project-submit-button" onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </li>
    )
}

const AddProject = ({handleClick}) => {
    
    return (
      <>
        <li id="addpro">
          <div onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#15C151"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            Add a Project
          </div>
        </li>
      </>
    );
}

const ProjectList = ({projects,inputProject,handleClick,handleProjectClick,handleProjectSubmit}) => {

    const projectList = projects.map(project => <li class = "pro-list" onClick = {() => handleProjectClick(project)} key = {project}>{project}</li>)

    return (
        <>
          <div id="pro-header">
            <p>Projects</p>
          </div>
          <div id="pro-items">
            <ul id="pro-items-list">{projectList}</ul>
            <ul id = "add-project-list">
                {inputProject ? <InputProject handleSubmit={handleProjectSubmit}/>:<AddProject handleClick = {handleClick} />}
            </ul>
          </div>
        </>
    )
}


const Sidebar = (props) => {

    return (
      <div id="sidebar">
        <div id="options">
            <TaskFilter tasksFilterList = {props.tasksFilterList} handleClick={props.handleTaskFilterClick} />
        </div>
        <div className="project">
            <ProjectList projects = {props.projects}  inputProject = {props.inputProject} handleClick = {props.handleAddProject} handleProjectClick={props.handleProjectClick}  handleProjectSubmit = {props.handleProjectSubmit}/>
        </div>
      </div>
    );
}

export default Sidebar;