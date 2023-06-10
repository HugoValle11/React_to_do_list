import React from "react"
import ShowList from "./ShowList"


export default function ToDoList(){

    const [taskList, setTaskList] = React.useState([])

    const [task, setTask] = React.useState({
        id: "",
        taskTitle: "",
        taskDescription: "",
        isDone: false
    })

    const [errorMessage, setErrorMessage] = React.useState("");

    function handleClick(event){
        event.preventDefault()

        if (!task.taskTitle) {
            setErrorMessage("Please enter a task title.");
            return;
        }

        setTaskList(prevTaskList => {
            return task.id !== "" ? [...prevTaskList, task] : [...prevTaskList]
        })
        setTask({
            id: "",
            taskTitle: "",
            taskDescription: "",
        });
        setErrorMessage("");
    }

    function handleChange(event){
        const {name, value} = event.target
        const nextID = taskList.length === 0 ? 1 : taskList.length + 1
        setTask((prevTask) => {
            return {
                ...prevTask,
                id: nextID,
                [name]: value
            }
        })
    }

    function handleDelete(id){
        const newList = taskList.filter((T) => {
            if(T.id === id){
                return false
            } else {
                return true
            }
        } )
        setTaskList(newList)
    }

    function handleDone(id){
        const newList = taskList.map((T) => {
            if(T.id === id){
                return {...T, isDone: true}
            }
            return T;
        })
        setTaskList(newList)
    }

    return (
        <div>
            <form className="app--form">
                <input 
                    className="form--input--title"
                    type="text"
                    placeholder="Type task title"
                    name="taskTitle"
                    value={task.taskTitle}
                    onChange={handleChange}
                    required
                    />
                
                <textarea 
                    className="form--input--description"
                    type="text"
                    placeholder="Type a description"
                    name="taskDescription"
                    value={task.taskDescription}
                    onChange={handleChange}
                    />
                    
                <button className="form--button" onClick={handleClick}>Add Task</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <ShowList
                listToShow={taskList}
                deleteItem={handleDelete}
                doneItem = {handleDone}
            />


        </div>
    )
}