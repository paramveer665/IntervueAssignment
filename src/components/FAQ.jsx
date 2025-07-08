import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I schedule an interview?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Will I be charged per interview?",
      answer: "No, you will not be charged per interview. Our pricing is based on a subscription model."
    },
    {
      question: "Can I get a trial for On-demand interviews?",
      answer: "Yes, we offer a free trial for our on-demand interview services. Please contact our sales team for more details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold text-gray-800 ">{faq.question}</h3>
                  <i className={`fas ${openFAQ === index ? 'fa-minus' : 'fa-plus'} text-gray-600`}></i>
                </button>
                {openFAQ === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;