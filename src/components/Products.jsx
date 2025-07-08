import React from 'react';

const Products = () => {
  return (
    <section className="bg-gray-100 py-20 px-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Explore more products on intervue</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/100" alt="Matching Interviewer" className="mb-4 md:h-70 md:w-60 border border-gray-100" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Matching Interviewer</h3>
            <p className="text-gray-600 mb-4">Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us</p>
            <a href="#" className="text-blue-500 hover:underline">Know more &rarr;</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/100" alt="Live interviews" className="mb-4 md:h-70 md:w-60 border border-gray-100" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Live interviews</h3>
            <p className="text-gray-600 mb-4">Assess candidates in real-time with our live coding environment & integrated video calls</p>
            <a href="#" className="text-blue-500 hover:underline">Know more &rarr;</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/100" alt="Assessments" className="mb-4 md:h-70 md:w-60 border border-gray-100" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Assessments</h3>
            <p className="text-gray-600 mb-4">Share assessments across batches with MCQ, Programming and Subjective questions.</p>
            <a href="#" className="text-blue-500 hover:underline">Know more &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;