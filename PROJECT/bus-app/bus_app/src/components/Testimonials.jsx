import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      content: "Incredible Journey. Safest and comfortable.",
      author: "Suresh Kumar",
      customerSince: "redbus customer since 2015"
    },
    {
      content: "Punctual and clean buses",
      author: "Abhinav Jain",
      customerSince: "redbus customer since 2016"
    },
    {
      content: "All time favourite buses",
      author: "Mohit Patil",
      customerSince: "2019 से redBus ग्राहक"
    }
  ];

  return (
    <section className="py-12 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Testimonials</h2>
        <p className="text-center text-gray-700 mb-6">Hear from our satisfied customers in their own words</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.customerSince}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;