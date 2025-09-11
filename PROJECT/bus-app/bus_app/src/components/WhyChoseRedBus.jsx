import React from 'react';

function WhyChooseRedBus() {
  const reasons = [
    "Free Cancellation - Cancel bus tickets without paying cancellation charges.",
    "Flexi Ticket - Select a Flexi ticket to modify your travel date at least 8 hours before departure.",
    "Earn Rewards - Refer your friend and get INR 100 in your redBus wallet after they complete their first trip.",
    "Booking for Women - Access exclusive deals for women travellers, view the number of women on your bus, enjoy priority helplines, and find buses preferred by women.",
    "Primo Services - Select top-rated bus operators that offer timely and customer-friendly Primo services.",
    "24/7 Customer Support - Receive 24/7 customer service for any assistance related to bookings.",
    "Instant Refund - Get an instant refund for cancellation or booking-related issues.",
    "Live Bus Tracking - Track your bus in real-time and plan your journey more efficiently."
  ];

  const reasonsTrain = [
    "An authorised partner of IRCTC- redRail is an authorised IRCTC partner, providing authentic information.",
    "Free cancellation- Get the freedom to cancel train tickets without paying cancellation charges.",
    "Seat Guarantee- Waitlist train ticket will get confirmed, or you will get a 3X refund to book an alternate train or bus.",
    "24/7 customer support- Customer support for redRail is available 24/7 to help you with train bookings."
  ];

  return (
    <section className="py-12 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose redBus for Bus Booking?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose redRail for Train Ticket Booking?</h2>
        <ul className="list-disc list-inside text-gray-700">
          {reasonsTrain.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseRedBus;