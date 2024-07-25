import "./App.css";
import { useState } from "react";

type Task = {
  id: number;
  content: string;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<Task[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const addtask = () => {
    setData([...data, { id: Date.now(), content: inputValue }]);
    setInputValue("");
  };
  const deleteTask = (id:number) => {
    setData(data.filter(task => task.id !== id));
  };
  return (
    <div className="box">
      <h1>Todo-List App</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addtask}>Add</button>
      </div>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <p>{task.content}</p>
            <div className="two-btns">
              <button>edit</button>
              <button onClick={()=>deleteTask(task.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
