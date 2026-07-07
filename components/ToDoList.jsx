import ToDoItem from "./ToDoItem";

function ToDoList(props){
    if(props.task.length==0){
        return;
    }

    return(
        <main className="main-section">
            <h2>Task at hand</h2>
            <section className="list-section">
                {props.task.map((task)=>{
                return <ToDoItem key={task.id} task={task} onEdit={props.onEdit} onDelete={props.onDelete}/>
                })}
            </section>
        </main>
    )
}

export default ToDoList;