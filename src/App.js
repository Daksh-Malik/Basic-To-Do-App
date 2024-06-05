import './App.css';
import React, {useState} from 'react'
import StartScreen from './components/StartScreen';

function App() {

  const [task, setTask] = useState("");
  const [list, setList] = useState({});

  function addToList(){
    const id = Date.now().toString();
    setList(prev => {
      setTask("");
      if(task==="") return prev;
      return {...prev, [id]: {todo: task, id, completed: false}};
    });
  }

  function deleteItem(itemID){
    setList(prev => {
      const {[itemID]: _, ...rest} = prev; //destructuring and storing rest of the key-value pairs
      return rest;
    })
  }

  function checkEnter(e){
    if(e.keyCode === 13){
      addToList();
    }
  }

  function done(itemID){
    setList(prev => {
      return {...prev, [itemID]: {...prev[itemID], completed: !prev[itemID].completed}}
    })
  }

  return (
    <div className='container'>
        <h1>Basic To Do App</h1>
        <div className='input-box'>
          <input type='text' value={task} onChange={e => {setTask(e.target.value)}} onKeyDown={checkEnter}/>
          <button id='add' onClick={addToList}></button>
        </div>
        <div id='outer-container'>
          {Object.keys(list).length === 0 ? 
            <StartScreen/>
            :
            <div id='inner-container'>
              <ul>
                {Object.values(list).map((item) => {
                  return <div key={item.id} className={`item ${item.completed ? 'completed' : ''}`}>
                    <div>
                      <li className={item.completed && 'completed'}>{item.todo}</li>
                    </div>
                    <button id='done' onClick={()=>done(item.id)}></button>
                    <button id='remove' onClick={()=>deleteItem(item.id)}></button>
                  </div>
                })}
              </ul>
            </div>
          }
        </div>
    </div>
  );
}

export default App;
