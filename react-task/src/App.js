import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "To buy!",
      text: "Milk, eggs, bread, pasta, beef loin, rice, ketchup and wheat.",
      complete: true,
    },
    {
      id: 2,
      title: "Mail myself",
      text: "File1.png File2.jpog Document.xd",
      complete: false,
    },
    {
      id: 3,
      title: "Complete the test",
      text: "http://www.atestthatihavetocompletebeforeacertaintime.com/test=80124?limit=129%",
      complete: false,
    },
  ]);

  return (
    <div className="container max-w-md flex flex-col border-4 border-purple-200 mx-auto mt-10 rounded-lg bg-purple-500 p-4 text-white">
      <Header title="Task App" buttonText="Add"></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
