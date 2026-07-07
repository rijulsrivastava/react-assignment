import { useState } from 'react';

function ToDoItem(props){

    const [changeInput, setChangeInput] = useState('noEdit');
    const [modifiedInput, setModifiedInput] = useState(props.task.input)

    function handleEdit(){
        setModifiedInput(props.task.input)
        setChangeInput('edit')
    }
    function handleSave(){
        props.onEdit(props.task.id,modifiedInput)
        setChangeInput("noEdit")
    }
    function handleDoNotSave(){
        setModifiedInput(props.task.input)
        setChangeInput('noEdit')
    }
    function handleDelete(){
        props.onDelete(props.task.id)    
    }
    function handleCheckbox(){
        props.isDone(props.task.id)
    }
    return(
        <div className="task-section">
            {console.log(props.task)}
            <div className='div1'>{props.task.id}.</div>
            <div className='div2'>
                {(changeInput=='edit') 
                ?
                <>
                <input type="text" value={modifiedInput} onChange={(e)=>{
                    setModifiedInput(e.target.value)
                }} />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleDoNotSave}>Don't Save</button>
                </>
                :
                <>
                <p style={{textDecoration:props.task.isDone?'line-through red':'none'}}>{props.task.input}</p>
                <div>
                    <input type='checkbox' value='done' onClick={handleCheckbox}/>
                    <button className='edit-btn' onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ToDoItem;