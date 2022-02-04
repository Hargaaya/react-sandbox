import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onDoubleClick }) => {
  return (
    <div
      className="bg-purple-600 p-2 my-2 rounded-md"
      onDoubleClick={() => onDoubleClick(task.id)}
    >
      <span className="bg-green-500 p-1 text-[8px] font-semibold rounded-3xl hidden">
        COMPLETED
      </span>
      <h3 className="text-xl pb-1 flex justify-between mt-1">
        {task.title}
        <FaTimes onClick={() => onDelete(task.id)} className="cursor-pointer" />
      </h3>
      <p className="break-words">{task.text}</p>
    </div>
  );
};

export default Task;
