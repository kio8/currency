import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPasword] = useState("");

  const passwordRef = useRef(null);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%&*_-?.";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPasword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const CopyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setLength(e.target.value);
  };
  return (
    <div className="w-screen h-screen bg-black  py-6">
      <div className="w-full max-w-md rounded-lg px-4 py-3  mx-auto bg-blue-500 text-black shadow-md">
        <h1 className="text-center font-semibold ">Password Creator</h1>
        <div className=" flex w-full  rounded-lg  text-black shadow-sm overflow-hidden ">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="w-full rounded-md p-2 "
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-black text-white text-sm px-3 outline-none py-0.5"
            onClick={CopyPassword}
          >
            copy
          </button>
        </div>
        <div className=" flex w-full   text-black text-sm gap-x-2 mt-2 overflow-hidden">
          <input
            type="range"
            min={6}
            max={20}
            className="cursor-pointer accent-black mt-1 "
            onChange={handleChange}
            value={length}
            name=""
            id=""
          />
          <label htmlFor="length"> Length :{length}</label>

          <input
            type="checkbox"
            className="cursor-pointer accent-black mt-1"
            name=""
            id=""
            defaultChecked
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="num">Numbers</label>

          <input
            type="checkbox"
            className="cursor-pointer accent-black mt-1 "
            name=""
            id=""
            defaultChecked
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters </label>
        </div>
      </div>
    </div>
  );
}

export default App;
