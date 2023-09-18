import React from "react";
import { BsFillKeyFill } from "react-icons/bs";
const Share = () => {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-6xl font-bold pt-20 text-center text-white">
        <span className="text-blue-300">Share or Receive</span> Files
      </h1>
      <h2 className="text-3xl text-white text-center mt-6">
        Seamlessly share docs around different devices.
      </h2>
      <div className="flex lg:flex-row flex-col mt-10 gap-2 mx-4">
        <BsFillKeyFill
          style={{ height: "6%", width: "2%", color: "black" }}
          className="absolute left-16"
        />
        <input
          type="text"
          id="simple-search"
          class="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[69%] pl-10 p-2.5 ml-10"
          placeholder="Enter or Select Private key"
          required
        />
        <button className="text-white px-9 rounded-xl bg-red-500 ">
          Get Data
        </button>
        <button className="text-white px-9 rounded-xl bg-blue-500">
          Share
        </button>
      </div>
    </div>
  );
};

export default Share;
