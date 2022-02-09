import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !title) {
      alert("please add both text and title!");
      return;
    }

    onAdd({ title, text, complete });

    setTitle("");
    setText("");
  };
  return (
    <form
      className="bg-purple-600 rounded-md p-3 flex flex-col font-semibold text-center"
      onSubmit={onSubmit}
    >
      <label>Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Add Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Text</label>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Add Text to the Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="submit"
        value="Save Task"
        className="bg-purple-400 cursor-pointer rounded-md mt-3 p-1 shadow-sm hover:shadow-inner hover:bg-purple-300"
      />
    </form>
  );
};

export default AddTask;
