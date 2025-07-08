import React from 'react';

const Security = () => {
  return (
    <section className="bg-gray-50 py-20 md:px-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Security is our top priority</h2>
        <p className="text-lg text-gray-600 mb-12">Intervue serves startups to fortune 500 companies with enterprise grade security baked in by design</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white  shadow-md p-6 flex flex-col items-start text-left">
            <i className="fas fa-lock text-3xl text-gray-700 mb-4"></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Security</h3>
            <p className="text-gray-600 mb-4">Protecting your data at every layer is fundamental to how Intervue works</p>
            <a href="#" className="text-blue-500 hover:underline self-end"><i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="bg-white  shadow-md p-6 flex flex-col items-start text-left">
            <i className="fas fa-clipboard-check text-3xl text-gray-700 mb-4"></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Compliances</h3>
            <p className="text-gray-600 mb-4">Enterprise grade compliance commitments where we have established controls to adhere to those commitments</p>
            <a href="#" className="text-blue-500 hover:underline self-end"><i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="gap-8">
          <div className="bg-white  shadow-md p-6 flex flex-col items-start text-left mb-4">
            <i className="fas fa-rocket text-3xl text-gray-700 mb-4"></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Intervue for Startups</h3>
            <a href="#" className="text-blue-500 hover:underline self-end"><i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="bg-white  shadow-md p-6 flex flex-col items-start text-left">
            <i className="fas fa-globe text-3xl text-gray-700 mb-4"></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Intervue for Enterprises</h3>
            <a href="#" className="text-blue-500 hover:underline self-end"><i className="fas fa-arrow-right"></i></a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;