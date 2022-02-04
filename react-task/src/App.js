import Header from "./components/Header";

function App() {
  return (
    <div className="container max-w-md flex flex-col border-4 border-purple-200 mx-auto mt-10 rounded-lg bg-purple-500 p-4 text-white">
      <Header title="Hello World!" buttonText="Add"></Header>
      <h1>1+1 is equal to {1 + 1}</h1>
    </div>
  );
}

export default App;
