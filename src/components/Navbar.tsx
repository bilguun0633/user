import Link from "next/link";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex flex-col w-64">
        <div className="bg-blue-500 h-14 flex items-center justify-center">
          <span className="font-semibold text-xl tracking-tight text-white">
            Admin Dashboard
          </span>
        </div>
        <nav className="mt-2 flex-1 bg-gray-800">
          <div className="px-1 space-y-1">
            <Link
              href="/"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            ></Link>
            <Link
              href="/agent"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            >
              Agents
            </Link>
            <Link
              href="/freelancer"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            >
              Freelancer
            </Link>
            <Link
              href="/templates"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            >
              Templates
            </Link>
            <Link
              href="/templates"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            >
              Category
            </Link>
            <Link
              href="/templates"
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
            >
              Comment
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
