import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-white py-20 md:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Here are frequently asked questions to clear all your doubts.</h3>
            <p className="text-gray-600">Still have doubts?</p>
            <p className="text-blue-500 flex items-center"><i className="fas fa-phone-alt mr-2 rotate-90"></i>Talk to our representative</p>
          </div>
          <div>
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">How do I schedule an interview?</h3>
              <i className="fas fa-plus text-gray-600"></i>
            </div>
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Will I be charged per interview?</h3>
              <i className="fas fa-plus text-gray-600"></i>
            </div>
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Can I get a trial for On-demand interviews?</h3>
              <i className="fas fa-plus text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;