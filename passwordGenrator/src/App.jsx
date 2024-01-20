import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [character, setcharacter] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (character) str += "~!@#$%^&*";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, character, numbers, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, numbers, passwordGenerator]);

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div>
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password" 
          readOnly
          />
        </div>
        <div className='flex text-sm gap-x-2 my-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {numbers}
            id="numberInput" 
            onChange={() => {setnumbers((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox" 
            defaultChecked = {character}
            id="characterInput" 
            onChange={() => {setcharacter((prev) => !prev)}}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
  );
}

export default App;
