import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white py-4 md:px-20 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">intervue</div>
        <div className='flex gap-4'>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><i className="fas fa-user-tie mr-2"></i>Become an Interviewer <i className="fas fa-external-link-alt ml-2 text-xs"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Start a trial</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800 border border-gray-300 px-4 py-1 ">Login</button>
            <button className="bg-black text-white px-4 py-1 ">Signup</button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 text-xl hover:text-gray-600 flex items-center"><i className="fas fa-user-tie mr-2"></i>Become an Interviewer <i className="fas fa-external-link-alt ml-2 text-xs"></i></a>
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 text-xl hover:text-gray-600">Features</a>
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 text-xl hover:text-gray-600">Pricing</a>
          <a href="#" onClick={closeMobileMenu} className="text-gray-800 text-xl hover:text-gray-600">Start a trial</a>
          <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800 border border-gray-300 px-4 py-2 w-48">Login</button>
          <button onClick={closeMobileMenu} className="bg-black text-white px-4 py-2 w-48">Signup</button>
        </div>
      )}
    </header>
  );
};

export default Header;