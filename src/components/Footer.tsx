import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/Bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/Fa";

export default function Footer() {
  return (
    <div>
      <div className="h-36 bg-blue-600 flex flex-row">
        <div className="flex flex-row">
          <h1 className="w-2/4"> Footer</h1>
          <div className="w-2/4">
            <AiFillFacebook />
            <BsInstagram />
            <FaTwitterSquare />
            <AiFillGoogleCircle />
          </div>
        </div>
        <div>
          <div>
            <h2>RESOURCES</h2>
          </div>
          <div>
            <h2>PRICING</h2>
          </div>
          <div>
            <h2>COMPANY</h2>
          </div>
          <div>
            <h2>SOCIAL</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
