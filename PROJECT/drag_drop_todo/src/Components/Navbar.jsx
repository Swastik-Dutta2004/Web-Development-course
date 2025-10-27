import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold flex items-center gap-2">
          📝 <span>My ToDo List</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li className="hover:text-blue-200 cursor-pointer">Home</li>
          <li className="hover:text-blue-200 cursor-pointer">Tasks</li>
          <li className="hover:text-blue-200 cursor-pointer">About</li>
        </ul>

        {/* Add Button */}
        <button className="bg-white text-blue-600 font-medium px-4 py-1.5 rounded-md hover:bg-blue-100 transition">
          + Add Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
