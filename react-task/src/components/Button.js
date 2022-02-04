const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 rounded-md px-4 py-2 shadow-md hover:bg-purple-400"
    >
      {text}
    </button>
  );
};

export default Button;
