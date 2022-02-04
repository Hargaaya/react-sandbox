const Task = ({ task }) => {
  return (
    <div className="bg-purple-600 p-2 my-2 rounded-md">
      <h3 className="text-xl pb-1">{task.title}</h3>
      <p>{task.text}</p>
    </div>
  );
};

export default Task;
