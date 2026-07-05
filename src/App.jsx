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
    }
    // {console.log(inputString)}
    
    setListItem([...listItem,item])
    setInputString("")
    setCounter(counter+1)
  }
  return(
    <>
      <Header/>
      <div className='input-section'>
        <input type="text" value={inputString} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Add item</button>
      </div>
      <ToDoList task ={listItem}/>
    </>
  )
}

export default App
