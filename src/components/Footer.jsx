import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:px-20">
      {/* Mobile Footer */}
      <div className="container mx-auto px-4 md:hidden">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">intervue</h3>
          <div className="mt-8 w-full">
            <h3 className="text-l font-bold mb-4">Hire better & faster</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 flex-grow"
              />
              <button className="bg-white text-gray-800 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                &#8599;
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8 w-full">
            <div>
              <h3 className="text-l font-bold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Case studies</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Downloads</a></li>
                <li><a href="#" className="hover:underline">Updates</a></li>
                <li><a href="#" className="hover:underline">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-l font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Culture</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center w-full">
            <p>&copy; 2023 Intervue.io</p>
            <p>All Rights Reserved</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:underline">Dateenschutz</a>
              <a href="#" className="hover:underline">Impressum</a>
              <a href="#" className="hover:underline">Cookie Policy</a>
              <a href="#" className="hover:underline">AGBS</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="container mx-auto px-4 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-[35%_repeat(4,1fr)] gap-3">
          <div>
            <h3 className="text-l font-bold mb-4">intervue</h3>
            <ul className="space-y-2 text-sm flex md:grid-cols-5 gap-3 md:mx">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Pinterest</a></li>
            </ul>
            <div className="mt-8">
              <h3 className="text-l font-bold mb-4">Hire better & faster</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 flex-grow"
                />
                <button className="bg-white text-gray-800 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  &#8599;
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">So gehts</a></li>
              <li><a href="#" className="hover:underline">Erfahrung</a></li>
              <li><a href="#" className="hover:underline">Aligner</a></li>
              <li><a href="#" className="hover:underline">Preise</a></li>
              <li><a href="#" className="hover:underline">Standorte</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-l font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Lift Media</a></li>
              <li><a href="#" className="hover:underline">Offene Stellen</a></li>
              <li><a href="#" className="hover:underline">Presse kit</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Intervue. Crafted by great minds.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Dateenschutz</a>
            <a href="#" className="hover:underline">Impressum</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">AGBS</a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;