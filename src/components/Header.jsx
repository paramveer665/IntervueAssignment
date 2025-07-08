import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">intervue</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><i className="fas fa-user-tie mr-2"></i>Become an Interviewer <i className="fas fa-external-link-alt ml-2 text-xs"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Start a trial</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 border border-gray-300 px-4 py-2 rounded-md">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-md">Signup</button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;