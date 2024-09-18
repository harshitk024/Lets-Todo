import Sidebar from "./Sidebar"
import Body from "./Body"

const Main = (props) => {
    
    return (
      <div className="main">
        <Sidebar
          tasksFilterList={props.tasksFilterList}
          handleTaskFilterClick={props.handleTaskFilterClick}
          projects={props.projects}
          inputProject = {props.inputProject}
          handleAddProject = {props.handleAddProject}
          handleProjectClick = {props.handleProjectClick}
          handleProjectSubmit = {props.handleProjectSubmit}
        />
        <Body
          heading={props.heading}
          handleShowTaskDialog={props.handleShowTaskDialog}
          taskList = {props.taskList}
          handleTaskDelete = {props.handleTaskDelete}
          handleTaskComplete = {props.handleTaskComplete}
          isCompleted={props.isCompleted}
        />
      </div>
    );
} 

export default Main;