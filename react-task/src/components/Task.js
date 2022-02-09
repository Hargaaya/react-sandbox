import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onDoubleClick }) => {
  return (
    <div
      className={`bg-purple-600 p-3 my-2 rounded-md`}
      onDoubleClick={() => onDoubleClick(task.id)}
    >
      <span
        className={`${
          task.complete ? "bg-green-500" : "bg-red-500"
        } rounded-full text-sm py-1 px-2 ml-1 shadow-sm`}
      >
        {task.complete ? "complete" : "not complete"}
      </span>

      <h3 className="px-2 text-xl py-1 flex justify-between mt-1">
        {task.title}
        <FaTimes
          onClick={() => onDelete(task.id)}
          className="cursor-pointer"
          alt="close"
        />
      </h3>

      <p className="px-2 break-words">{task.text}</p>
    </div>
  );
};

export default Task;
