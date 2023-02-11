import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-700 text-center h-screen flex items-center justify-center flex-col">
      <h1 className="text-white/60 mb-8 text-3xl">React Test 1.1</h1>
      <div className="w-40 h-40 rounded-full flex items-center justify-center bg-zinc-100	 shadow-lg	mb-10">
        <h3 className="text-6xl">{count}</h3>
      </div>
      <div className="flex space-x-2 justify-center">
        <button className="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
        <button
          className="button disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={count === 0}
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
