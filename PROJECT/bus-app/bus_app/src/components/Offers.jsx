import React from 'react';

function Offers() {
  const offers = [
    {
      image: "https://st.redbus.in/Images/INDOFFER/Sampleimages/296x200.png",
      title: "Save up to Rs 500 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "RED500",
      type: "Bus"
    },
    {
      image: "https://st.redbus.in/Images/INDOFFER/Sampleimages/sampleimage1.png",
      title: "Save up to Rs 250 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "FIRST",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/rpwassets/public/images/offerFallback.png",
      title: "Get Rs 200 off on train tickets",
      validity: "Valid till 03 Nov",
      code: "EARLYBIRD",
      type: "Train"
    },
    {
      image: "https://st.redbus.in/Images/INDOFFER/AU/Android-iOS-296x200.png",
      title: "Save upto Rs 200 with AU Bank Credit Cards",
      validity: "Valid till 31 Dec",
      code: "AUBUS200",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 250 on GSRTC buses",
      validity: "Valid till 01 Oct",
      code: "GSRTC",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Get Rs 60 off on train tickets",
      validity: "Valid till 03 Nov",
      code: "SUPERB60",
      type: "Train"
    },
    {
      image: "https://www.redbus.in/",
      title: "ZERO Convenience FEE",
      validity: "Valid till 03 Nov",
      code: "NOFEE",
      type: "Train"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs. 50 on IntrCity SmartBus operator",
      validity: "Valid till 30 Sep",
      code: "INTRCITY",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 50 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "YOLORED",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 100 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "RKTBUS",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save Rs.100 Discount on Prasanna Purple Mobility Solutions Pvt Ltd",
      validity: "Valid till 30 Sep",
      code: "PURPLE100",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 50 on bus tickets",
      validity: "Valid till 30 Nov",
      code: "WELCOME50",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 50 on GSRTC buses",
      validity: "Valid till 01 Oct",
      code: "GSRTC50",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 250 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "TGSRTC",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 130 on Hans Travels",
      validity: "Valid till 31 Dec",
      code: "HANS10",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 100 on Jogeshwari Enterprises",
      validity: "Valid till 01 Oct",
      code: "JT100",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 150 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "TGSRTC10",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save up to Rs 100 on bus tickets",
      validity: "Valid till 30 Sep",
      code: "SAIRAM100",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Save Rs 10% Discount on bus tickets",
      validity: "Valid till 31 Oct",
      code: "MUSAFIR10",
      type: "Bus"
    },
    {
      image: "https://www.redbus.in/",
      title: "Get upto Rs 400 on bus tickets",
      validity: "Valid till 31 Dec",
      code: "STUDENT",
      type: "Bus"
    },
  ];

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Offers for you</h2>
          <a href="#" className="text-red-600 hover:text-red-700 transition-colors duration-200">View more</a>
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">All</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">Bus</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">Train</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              { offer.image && <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover" />}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.validity}</p>
                <p className="text-sm text-gray-600">Code: <span className="font-medium">{offer.code}</span></p>
                <p className="text-sm text-gray-600">Type: <span className="font-medium">{offer.type}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;