import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-white py-20 md:flex md:m-12 ">
      <div className="md:w-1/2 flex  w-[60%] mb-8 md:mb-0 bg-gray-500 rounded-r-full justify-end">
          <img src="https://via.placeholder.com/300" alt="Niket Gupta" className=" w-64 h-64 object-cover" />
        </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row  ">
        
        <div className="md:w-1/2 md:pl-12 text-left md:text-left ">
          <p className="text-lg text-gray-600 mb-6">After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.</p>
          <p className="font-bold text-gray-800">Niket Gupta</p>
          <p className="text-gray-500">Group head of talent acquisition, Yubi</p>
          <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">See more customer stories &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;