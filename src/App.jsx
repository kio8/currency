import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-black  py-6">
      <div className="w-full max-w-md rounded-lg px-4 py-3  mx-auto bg-blue-500 text-black shadow-md">
        <h1 className="text-center font-semibold mb-1">Password Creator</h1>
        <div className=" flex w-full  rounded-lg  text-black shadow-sm overflow-hidden ">
          <input
            type="text"
            value={""}
            placeholder="Password"
            className="w-full rounded-md p-2 "
          />
          <button className="bg-black text-white text-sm px-3 outline-none py-0.5">
            copy
          </button>
        </div>
        <div className=" flex w-full   text-black text-sm gap-x-2 mt-2 overflow-hidden">
          <input
            type="range"
            min={6}
            max={20}
            className="cursor-pointer accent-black mt-1 "
          />
          <label htmlFor="length"> Length :{""}</label>

          <input
            type="checkbox"
            className="cursor-pointer accent-black mt-1"
            name=""
            id=""
            defaultChecked
          />
          <label htmlFor="num">Numbers</label>

          <input
            type="checkbox"
            className="cursor-pointer accent-black mt-1 "
            name=""
            id=""
            defaultChecked
          />
          <label htmlFor="char">Characters </label>
        </div>
      </div>
    </div>
  );
}

export default App;
