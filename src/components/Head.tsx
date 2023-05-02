import React from "react";
import { BsSearch } from "react-icons/Bs";
export default function Head() {
  return (
    <div className="h-36 bg-blue-600 flex flex-row">
      <div className=" flex flex-row w-2/4 my-2 ">
        <div className="px-6 flex flex-row">
          <label className=" text-white  font-bold mb-2"></label>
          <input
            className="content-center form-control i align-bottom bg-white rounded-lg px-4 pt-1 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  "
            id="username"
            type="text"
            placeholder="Search"
          />
          <button className="items-center mx-3">
            <BsSearch />
          </button>
          <button className="  mx-2  ">
            <h2 className="  text-white">Home</h2>
          </button>
          <button className="mx-2 ">
            <h2 className="  text-white">notfication</h2>
          </button>
          <button className=" mx-2">
            <h2 className="  text-white">LogIn</h2>
          </button>
        </div>
      </div>
      {/* <button>
        <i className="fi fi-bs-search"></i>
      </button> */}
      <div className=" my-2 "></div>
    </div>
  );
}
