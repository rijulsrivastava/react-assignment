import ToDoItem from "./ToDoItem";

function ToDoList(props){
    if(props.task.length==0){
        return
    }

    return(
        <>
        <h2>To-Do List</h2>
        {props.task.map((task)=>{
            return <ToDoItem key={task.id} task={task}/>
        })}
        </>
    )
}

export default ToDoList;