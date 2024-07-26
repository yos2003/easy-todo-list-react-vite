import "./App.css";
import { useState } from "react";

type Task = {
  id: number;
  content: string;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<Task[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const addtask = () => {
    if (editId === null) {
      setData([...data, { id: Date.now(), content: inputValue }]);
      setInputValue("");
    }else{
      setData(data.map((task) => task.id === editId? {...task, content:inputValue}: task));
      setInputValue("");
      setEditId(null);
    }
  };
  const deleteTask = (id: number) => {
    setData(data.filter((task) => task.id !== id));
  };
  const editTask = (id: number) => {
    const task = data.find((task) => task.id === id);
    if (task) {
      setInputValue(task.content);
      setEditId(id);
    }
  };
  return (
    <div className="box">
      <h1>Todo-List App</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addtask}>{editId ? "update" : "Add"}</button>
      </div>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <p>{task.content}</p>
            <div className="two-btns">
              <button onClick={() => editTask(task.id)}>edit</button>
              <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
