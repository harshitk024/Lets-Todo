import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import AddTaskDialog from './components/AddTaskDialog'
import './App.css'
import {isToday,isThisWeek} from "date-fns"

const tasksFilterList = [
  {
    id: "all-tasks",
    label: "Tasks",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#219ebc"
      >
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
      </svg>
    ),
  },

  {
    id: "today-tasks",
    label: "Today",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#EA3323"
      >
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
      </svg>
    ),
  },
  {
    id: "week-tasks",
    label: "This Week",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#EAC452"
      >
        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
      </svg>
    ),
  },
];

const App = () => {

  
  const [heading,setHeading] = useState("Tasks")
  const [showTaskDialog,setShowTaskDialog] = useState(false)
  const [projects,setProjects] = useState([])
  const [inputProject,setInputProject] = useState(false)
  const [taskList,setTaskList] = useState([
    {

      project: "Home",
      task: "Do laundry",
      description: "",
      date: "2005-10-09",
      priority: "green"
  
    },
    {

      project: "School",
      task: "Do Homework",
      description: "",
      date: "2024-10-03",
      priority: "red"
  
    }
  ])
  const [filterTask,setFilterTask] = useState([...taskList])
  const [isCompleted,setIsCompleted] = useState(false)


  useEffect(() => {

    const tasks = document.querySelectorAll(".task-container")

    for(let i = 0; i < tasks.length;i++){
      tasks[i].style.borderLeft = `20px solid ${filterTask[i].priority}` 
    }

  },[filterTask])


  const [task,setTask] = useState({

    project: "",
    task: "",
    description: "",
    date: "",
    priority: ""

  })

  const onProjectChange = (e) => {

    const updated = {
      ...task,
      project: e.target.value
    }

    setTask(updated)

  }

  const onTaskChange = (e) => {

    const updated = {
      ...task,
      task: e.target.value
    }

    setTask(updated)

  }

  const onDescriptionChange = (e) => {

    const updated = {
      ...task,
      description: e.target.value
    }

    setTask(updated)

  }

  const onDateChange = (e) => {

    const updated = {
      ...task,
      date: e.target.value
    }

    setTask(updated)

  }

  const onPriorityChange = (e) => {

    const updated = {
      ...task,
      priority: e.target.value
    }

    setTask(updated)

  }


  const handleTaskFilterClick = (label) => {

    setHeading(label)

    if(label === "Today"){
      setFilterTask(getTodayTasks())
    } else if (label === "This Week"){
      setFilterTask(getThisWeekTasks())
    } else {
      setFilterTask([...taskList])
    }

  }

  const handleshowTaskDialog =  () => {

    if(projects.find(p => p === heading)){

    setTask({
      ...task,
      project: heading
    })



    }

    console.log("button clicked");
    
    setShowTaskDialog(!showTaskDialog)
  }

  const handleClose = () => {
    setShowTaskDialog(false)
    setTask({

      project: "",
      task: "",
      description: "",
      date: "",
      priority: ""
  
    })
    document.getElementById("taskDialog").close()
  }

  const handleAddProject = () => {
    console.log("Clicked handle project");
    
    setInputProject(true)
  }

  const getTodayTasks = () => {
      
    const tasks = taskList.filter((t) => isToday(t.date))

    return tasks

  }

  const getThisWeekTasks = () => {
      
    const tasks = taskList.filter((t) => isThisWeek(t.date))

    return tasks

  }
  

  const handleSubmit = () => {

    console.log("clicked submit");
    
    setTaskList(taskList.concat(task))
    setFilterTask(taskList.concat(task))
    setShowTaskDialog(false)

    const project = projects.find((p) => p === task.project)

    if(!project){
      setProjects(projects.concat(task.project))
    }

    setTask({

      project: "",
      task: "",
      description: "",
      date: "",
      priority: ""
  
    })
    document.getElementById("taskDialog").close()

  }

  const handleProjectClick = (name) => {

    
    const filter = taskList.filter((task) => task.project === name)

    setFilterTask(filter)
    setHeading(name)
    
  }

  const handleProjectSubmit = (e) => {

    e.preventDefault()

    const value = document.getElementById("pro-input").value

    const project = projects.find((p) => p === value)

     if(project){
       alert("Project already existed")
     } else {
       setProjects(projects.concat([value]))
       setInputProject(false)
     }
     
  }

  const handleTaskDelete = (task) => {

    if(window.confirm(`Do you wanna delete ${task}?`)){
    
    const updated = taskList.filter((t) => t.task !== task)

    setTaskList(updated)
    setFilterTask(updated)
    setHeading("Tasks")
    }
  }

  const handleTaskComplete = (task) => {

    const name = document.getElementById(task)
    name.style.textDecorationLine = "line-through"

    setTimeout(() => {
      const updated = taskList.filter((t) => t.task !== task)

      setTaskList(updated)
      setFilterTask(updated)
      setHeading("Tasks")
    },1500)

  }

  return (
    <>
      <Header />
      <Main
        tasksFilterList={tasksFilterList}
        handleProjectClick = {handleProjectClick}
        handleTaskFilterClick={handleTaskFilterClick}
        heading={heading}
        handleShowTaskDialog={handleshowTaskDialog}
        projects={projects}
        inputProject={inputProject}
        handleAddProject={handleAddProject}
        taskList={filterTask}
        handleProjectSubmit = {handleProjectSubmit}
        handleTaskDelete = {handleTaskDelete}
        handleTaskComplete = {handleTaskComplete}
        isCompleted = {isCompleted}
      />
      <AddTaskDialog
        handleCancel={handleClose}
        values={task}
        changeHandlers={[
          onProjectChange,
          onTaskChange,
          onDescriptionChange,
          onDateChange,
          onPriorityChange,
        ]}
        handleSubmit = {handleSubmit}
      />

      {showTaskDialog
        ? document.getElementById("taskDialog").showModal()
        : null}
    </>
  );
}


export default App
