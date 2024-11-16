import { useEffect, useState } from "react"
import './index.css'

function App() {
  const [Tasks, setTasks] = useState([])
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  useEffect(() => {
    fetchTasks();
  }, [])

const fetchTasks = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/tasks/')
    console.log(response);
    const data = await response.json()
    console.log(data)
    setTasks(data);
    } catch (error) {
      console.error(error)
    }
  }

  const AddTasks = async () => {
    const TasksData = {
      title,
      description,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tasks/create/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(TasksData)
      });
      const data = await response.json(); 
      setTasks((prev) => [...prev, data]);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {  // Ensure trailing slash
        method: 'DELETE',
      });
      if (response.ok) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
      } else {
        console.error(`Failed to delete task with id ${id}:`, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
  <div>
    <h1 style={{color:"wheat"}}>Add the tasks</h1>

    <div className="card" >
    <div className="card-header">
  <input 
    className="card-title" 
    type="text" 
    placeholder="Add the Title of the item" 
    onChange={(e) => settitle(e.target.value)} 
  />
</div>
<div className="card-body">
  <input 
    className="card-description" 
    type="text" 
    placeholder="Add the description of the item" 
    onChange={(e) => setdescription(e.target.value)} 
  />
</div>
    <div className="card-footer">
        <button onClick={AddTasks} className="card-button">Add the item</button>
    </div>
</div>

<div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "wheat" }}>
  {Tasks.map((Task, index) => (
    <div key={Task.id} style={{ border: "1px solid wheat", padding: "10px", borderRadius: "5px" }}>
      <h1>Task No: {index + 1}</h1>
      <p style={{ fontSize: "20px" }}>Title: {Task.title}</p>
      <p style={{ fontSize: "20px" }}>Description: {Task.description}</p>
      <button onClick={() => deleteTask(Task.id)} className="card-button">Delete</button>
    </div>
  ))}
</div>
    </div>
  )
}

export default App
