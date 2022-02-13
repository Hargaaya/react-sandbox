import React from "react";

const CaptchaTask = ({ taskComplete, setTaskComplete }) => {
  const [showNumbers, setShowNumbers] = React.useState(true);
  const [numbers, setNumbers] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      setShowNumbers(!showNumbers);
    }, 3000);
  }, []);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 10 ** 2);
    setNumbers(random);
  }, []);

  React.useEffect(() => {
    document.getElementById("taskNumber").addEventListener("keypress", (e) => {
      const target = document.getElementById("taskNumber");

      if (e.key === "Enter") {
        target.value === String(numbers)
          ? setTaskComplete(true)
          : setTaskComplete(false);
      }
    });
  }, [showNumbers]);

  return (
    <div className="absolute top-10 left-[-100px] w-96 overflow-hidden rounded-md bg-white shadow-md">
      <header className="bg-blue-500">
        <h2 className="select-none p-5 text-lg font-medium text-white">
          {showNumbers
            ? "Remember the numbers below"
            : "Type in the numbers below"}
        </h2>
      </header>

      {showNumbers && (
        <span className="mx-1 flex justify-center rounded-lg bg-white">
          {Array.from(String(numbers)).map((item, index) => (
            <NumberPlate key={index} n={item}></NumberPlate>
          ))}
        </span>
      )}

      <input
        type="text"
        id="taskNumber"
        className={`w-full p-5 outline-none ${showNumbers && "hidden"}`}
        data-lpignore="true"
      />
    </div>
  );
};

const NumberPlate = ({ n }) => {
  return (
    <div className="animate-spin select-none p-5 text-xl font-bold">{n}</div>
  );
};

export default CaptchaTask;
