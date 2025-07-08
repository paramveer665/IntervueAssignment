import React from 'react';

const resources = [
  { difficulty: 'Easy', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Medium', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Hard', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Easy', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Medium', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Hard', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Easy', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Medium', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
  { difficulty: 'Hard', type: 'DATA STRUCTURES & ALGORITHMS', title: 'Design a Free Food App', description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews' },
];

const Resources = () => {
  return (
    <section className="bg-gray-100 py-12 md:px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 md:hover:opacity-75 md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${resource.difficulty === 'Easy' ? 'bg-blue-100 text-blue-800' : resource.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                  {resource.difficulty}
                </span>
                <span className="ml-4 text-sm text-gray-500">{resource.type}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;