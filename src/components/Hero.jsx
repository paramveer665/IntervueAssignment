import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Technical Interview Resources</h1>
        <p className="text-xl text-gray-600 mb-8">Find all the technical interview resources here</p>
        <div className="relative w-full md:w-1/2 mx-auto">
          <input id="search" name="s" type="text" placeholder="Search for resource here" className="w-full px-4 py-3 rounded-[2rem] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 pl-10 bg-gray-200" />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;