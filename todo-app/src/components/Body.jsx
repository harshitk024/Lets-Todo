const AddButton = ({handleClick}) => {

    return (
        <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="29px"
          viewBox="0 -960 960 960"
          width="29px"
          fill="#e8eaed"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        Add Task
       </button>
    )
}

const TaskPanel = ({task,handleDelete,handleTaskComplete,isCompleted}) => {
   
    return (
      
        <>
         <div className = "task-container">
          <div>
            <div>
              <input
                onClick={() => handleTaskComplete(task.task)}
                data-name={task.name}
                data-project-name={task.project}
                type="radio"
              />
            </div>
            <div id="cont-task-name">
              <div className="task-name" data-project-name={task.project} id = {task.task}>
                {task.task}
              </div>
            </div>
            <div id="view-task">
              <a href="">{task.project}</a>
            </div>
          </div>
          <div>
            {task.date}
            <svg onClick = {() => {handleDelete(task.task)}}
              data-name={task.task}
              data-pro-name={task.project}
            //   style="margin-left : 13px;"
              id="taskdeleteIcon"
              className="task-delete"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e73636"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </div>
          </div>
        </>
      
    );
}

const Body = ({heading,handleShowTaskDialog,taskList,handleTaskDelete,handleTaskComplete,isCompleted}) => {

    const tasks = taskList.map(task => <TaskPanel handleDelete = {handleTaskDelete} handleTaskComplete = {handleTaskComplete} isCompleted = {isCompleted}key = {task.task} task = {task}/>)

    return (
      <>
        <div id="main-content">
          <div id="main-header">
            <div id="heading">{heading}</div>
            <div id="addTask">
               <AddButton handleClick = {handleShowTaskDialog}/>
            </div>
          </div>
          <div id="content">
                 {tasks}
          </div>
        </div>
      </>
    );
}

export default Body;