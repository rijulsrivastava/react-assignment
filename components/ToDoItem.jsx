import { useState } from 'react';
import './ToDoList.css'

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
            <div className='div1'><i class="fa-solid fa-angle-right"></i></div>
            <div className='div2'>
                {(changeInput=='edit') 
                ?
                <div className='edit-section'>
                <input type="text" value={modifiedInput} onChange={(e)=>{
                    setModifiedInput(e.target.value)
                }} />
                <div className='change-section'>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleDoNotSave}>Don't Save</button>
                </div>
                </div>
                :
                <>
                <p style={{textDecoration:props.task.isDone?'line-through red':'none'}}>{props.task.input}</p>
                <div className='div3'>
                    {props.task.isDone?<p style={{color:'green', fontWeight:'bold'}}>Completed</p>:null}
                    <input type='checkbox' checked={props.task.isDone} value='done' onChange={handleCheckbox} className='checkbox' style={{width:'20px', height:'20px'}}/>
                    <button className='edit-btn' onClick={handleEdit}><i class="fas fa-edit"></i></button>
                    <button onClick={handleDelete} style={{color:'red'}}><i class="fa-solid fa-trash"></i></button>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ToDoItem;