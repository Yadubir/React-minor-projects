import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState('black');
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="text-white flex justify-center p-36">The colour is {color}</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div>
          <button className="outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg bg-red-700"
          onClick={() => setcolor('#B91C1C')}
          >Red
          </button>
          <button className="outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg bg-green-900"
          onClick={() => setcolor('#14532D')}
          >Green
          </button>
          <button className="outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg bg-teal-800"
          onClick={() => setcolor('#115E59')}
          >Teal
          </button>
          <button className="outline-none px-4 py-1 mx-2 rounded-full text-white shadow-lg bg-blue-900"
          onClick={() => setcolor('#1E3A8A')}
          >Blue
          </button>
          <button className="outline-none px-4 py-1 v rounded-full text-white shadow-lg bg-yellow-800"
          onClick={() => setcolor('#854D0E')}
          >Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
