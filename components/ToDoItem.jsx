function ToDoItem(props){
    return(
        <div>
            {/* {console.log(props.task)} */}
            <p>{props.task.id}</p>
            <p>{props.task.input}</p>
        </div>
    )
}

export default ToDoItem;