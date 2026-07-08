import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import ToDoList from '../components/ToDoList'

function App() {
  const [inputString,setInputString] = useState('')
  const [listItem,setListItem] = useState([])
  const [counter,setCounter] = useState(1)

  function handleOnChange(event){
    setInputString(event.target.value);
  }
  function handleOnClick(){
    if(inputString==""){
      return;
    }
    const item = {
      id:counter,
      input:inputString,
      isDone:false
    }
    // {console.log(inputString)}
    
    setListItem([...listItem,item])
    setInputString("")
    setCounter(counter+1)
  }

  function handleEdit(id, modifiedInput) {
    const updatedList = listItem.map((item) =>{
      if(item.id == id){
        return {...item, input: modifiedInput}
      }
      return item
    })
    setListItem(updatedList);
  }

  function handleDelete(id){
    setListItem(listItem.filter((ele)=>ele.id != id))
  }

  function handleDone(id){
    setListItem(listItem.map((ele)=>{
      if(ele.id == id){
        return  { ...ele, isDone: !ele.isDone }
      }
      return ele
    }))
  }

  return(
    <div className='root-div'>
      <div className='bg'>
      </div>
      <Header/>
      <div className='input-section'>
        <input type="text" value={inputString} onChange={handleOnChange} placeholder='Enter Task'/>
        <button onClick={handleOnClick}>Add item</button>
      </div>
      <ToDoList task ={listItem} onEdit={handleEdit} onDelete={handleDelete} isDone={handleDone}/>
    </div>
  )
}

export default App
