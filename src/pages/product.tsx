import React from "react";

export default function product() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/3 p-3 ">
          <div className="border-solid border-2 border-black p-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <h2>WEB design</h2>
            <div className="flex flex-row items-center">
              <h2>Price :</h2>
              <input
                className=" mx-2 form-control  bg-white rounded-lg px-4 pt-1 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-2/4"
                type="text"
                placeholder="price"
              />
            </div>
            <div className="flex flex-row items-center">
              <h2>Technolog :</h2>
              <input
                className=" mx-2 form-control  bg-white rounded-lg px-4 pt-1 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-2/4"
                type="text"
                placeholder="price"
              />
            </div>
            <div>
              {" "}
              <input
                className="form-control inline-block align-bottom bg-white rounded-lg px-4 pt-1 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                type="text"
                placeholder="comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
