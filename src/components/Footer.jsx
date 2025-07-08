import React from 'react';
import Twentyone from "../assets/20.png"

const Footer = () => {
  return (
    <footer className="bg-[#27282C] text-white py-12 md:px-20">
      {/* Mobile Footer */}
      <div className="container mx-auto px-4 md:hidden">
        <div className="flex flex-col items-center text-center">
          
          <a href='/' className='w-30'><img src="./src/assets/20.png" alt="Intervue" srcset="" /></a>
          <div className="mt-8 ">
              <h3 className="text-l font-bold mb-4">Hire better & faster</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2  focus:outline-none focus:ring-2 focus:ring-amber-400 text-white flex-grow border border-b-amber-400 border-t-gray-800 border-r-gray-800 border-l-gray-800 placeholder-amber-50"
                />
                <button className=" text-amber-400 text-3xl p-2 rounded-r-md hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  &#8599;
                </button>
              </div>
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
            
          <div className="flex space-x-4 mt-8 text-4xl gap-8 mb-6">
            <a href="https://www.facebook.com/intervue.io" className="hover:underline"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/intervue.io" className="hover:underline"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/intervue-io/" className="hover:underline"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:underline"><i className="fab fa-pinterest"></i></a>
            <a href="https://www.youtube.com/@intervuehq" className="hover:underline"><i className="fab fa-youtube"></i></a>
          </div>
            <p>Copyright &copy; 2023 Intervue.io</p>
            <p>All Rights Reserved</p>
            
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="container mx-auto px-4 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-[35%_repeat(4,1fr)] gap-3">
          <div>
            <a href='/'><img src={Twentyone} className='w-25 h-10 bg-blend-soft-light' alt="Intervue" srcset="" /></a>
            <ul className="space-y-2 text-sm flex md:grid-cols-5 gap-3 md:mx">
              <li><a href="https://www.facebook.com/intervue.io" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.instagram.com/intervue.io" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/intervue-io/" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Pinterest</a></li>
            </ul>
            <div className="mt-8">
              <h3 className="text-l font-bold mb-4 left-0">Hire better & faster</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2  focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-100 flex-grow border border-b-amber-400 border-t-gray-800 border-r-gray-800 border-l-gray-800 placeholder-amber-50"
                />
                <button className=" text-amber-400 text-3xl p-2 rounded-r-md hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
          <div>
            <h3 className="text-l font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Gratis Termin</a></li>
              <li><a href="#" className="hover:underline">Freunde einladen</a></li>
              <li><a href="#" className="hover:underline">Patienteninforma</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-l font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Gratis Termin</a></li>
              <li><a href="#" className="hover:underline">Freunde einladen</a></li>
              <li><a href="#" className="hover:underline">Patienteninforma</a></li>
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