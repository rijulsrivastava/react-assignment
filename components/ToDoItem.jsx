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
                {props.task.input}
                <div>
                    <button className='edit-btn' onClick={handleEdit}>Edit</button>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ToDoItem;