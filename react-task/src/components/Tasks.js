import Task from "./Task";

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
  return (
    <>
      <div className="mt-5">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onDoubleClick={onDoubleClick}
          ></Task>
        ))}
      </div>
    </>
  );
};

export default Tasks;
