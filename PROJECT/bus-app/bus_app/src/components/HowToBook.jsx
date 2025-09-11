import React from 'react';

function HowToBook() {
  const steps = [
    "Step 1: Visit the redBus website or app.",
    "Step 2: Select your preferred mode of transport, either bus or train.",
    "Step 3: Select your travel date and journey details.",
    "Step 4: Search for your preferred bus or train available on your chosen travel date and route.",
    "Step 5: Select your preferred boarding or dropping points and enter your contact details.",
    "Step 7: Choose from multiple payment options to proceed with the payment process.",
    "Step 8: After the successful payment, you will receive a confirmation of your train or bus bookings on your registered email ID or mobile number."
  ];

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Book Bus Tickets and Train Tickets Online on redBus?</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowToBook;