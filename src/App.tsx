import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data,setData]=useState<string[]>([]);

  const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }
  const addtask=()=>{
    setData([ ...data,inputValue]);
    setInputValue('');
  }
  return (
    <>
      <div className="box">
        <h1>Todo-List App</h1>
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={addtask}>Add</button>
        </div>
        <ul>
          {data.map((task,index)=>
            <li key={index}>
            <p>{task}</p>
            <div className="two-btns">
              <button>edit</button>
              <button>delete</button>
            </div>
          </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
