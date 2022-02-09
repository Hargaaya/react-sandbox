import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [showAdd, setShowAdd] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      let tasks = await fetchData();
      setTasks(tasks);
    };

    getTasks();
  }, []);

  const fetchData = () => {
    return fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const fetchTask = (id) => {
    return fetch(`http://localhost:5000/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  // Add Task
  const addTask = async (newTask) => {
    let res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    let data = await res.json();

    setTasks([...tasks, data]);
    // let index = tasks.length + 1;
    // setTasks([
    //   ...tasks,
    //   {
    //     id: index,
    //     title: newTask.title,
    //     text: newTask.text,
    //     complete: false,
    //   },
    // ]);
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log("deleted: " + id);
    fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark as complete
  const onDoubleClick = async (id) => {
    console.log("doubleClicked: " + id);

    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      complete: !taskToToggle.complete,
    };
    console.log(updTask);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    console.log("return: " + data.id + data.title);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !data.complete } : task
      )
    );
  };

  return (
    <div className="container max-w-md flex flex-col border-8 border-dashed border-purple-200 mx-auto mt-10 rounded-2xl bg-purple-500 p-4 text-white">
      <Header
        title="Task App"
        buttonText={showAdd ? "Close" : "Add"}
        onClick={() => setShowAdd(!showAdd)}
      ></Header>
      {showAdd ? <AddTask onAdd={addTask}></AddTask> : ""}
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onDoubleClick={onDoubleClick}
      ></Tasks>
    </div>
  );
}

export default App;
