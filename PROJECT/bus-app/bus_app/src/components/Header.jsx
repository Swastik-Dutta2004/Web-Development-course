import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://s3.rdbuz.com/assets/images/logo/b_logo.png" alt="redBus Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl text-red-600">redBus</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Bus Tickets</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Train Tickets</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors duration-200">rPool</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Help</a></li>
          </ul>
        </nav>
        <div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">Login / Signup</button>
        </div>
      </div>
    </header>
  );
}

export default Header;