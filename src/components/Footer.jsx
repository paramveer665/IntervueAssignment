import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[35%_repeat(4,1fr)] gap-3">
          <div>
            <h3 className="text-l font-bold mb-4">intervue</h3>
            <ul className="space-y-2 text-sm flex md:grid-cols-5 gap-3 md:mx">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Pinterest</a></li>
            </ul>
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