import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <img src="https://s3.rdbuz.com/Images/responsiveweb/HomeBanner.webp" alt="Home Banner" className="w-full rounded-lg shadow-md" />
        <div className="text-center mt-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">India's No. 1 online bus ticket booking site</h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="text" placeholder="From" className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-64" />
            <input type="text" placeholder="To" className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-64" />
            <input type="date" placeholder="Date of Journey" className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-64" />
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">Search Buses</button>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <img src="https://www.redbus.in/rpwassets/public/images/female.svg" alt="Booking for women" className="h-6 mr-2" />
            <span className="text-sm text-gray-700">Booking for women</span>
            <a href="#" className="text-sm text-red-600 ml-2 hover:text-red-700 transition-colors duration-200">Know more</a>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <img src="https://st.redbus.in/Images/redrail/homepage/newTrain.svg" alt="Book trains for festivals" className="h-6 mr-2" />
            <span className="text-sm text-gray-700">Book trains for festivals</span>
            <a href="#" className="text-sm text-red-600 ml-2 hover:text-red-700 transition-colors duration-200">Book now to get confirmed ticket</a>
          </div>
          <p className="text-sm text-gray-700 mt-2">Get ₹100 off using code <b>FESTIVE</b></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;