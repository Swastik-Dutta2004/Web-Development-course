import React from 'react';

function GovernmentBuses() {
  const buses = [
    {
      image: "https://s3.rdbuz.com/web/images/homeV2/10283.png",
      name: "APSRTC",
      rating: "3.85",
      description: "ఆంధ్రప్రదేశ్ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
      services: "1539 services including Garuda, Garuda Plus and more",
      altText: "Official booking partner of APSRTC",
      codeInfo: "Use code APSRTCNEW to save upto ₹250 (only for first time users)",
      concessionInfo: "Get 25% concession for senior citizen passengers",
      trustedInfo: "redBus is the most trusted place to book APSRTC tickets online",
    },
    {
      image: "https://s3.rdbuz.com/web/images/homeV2/32245.png",
      name: "TGSRTC",
      rating: "3.71",
      description: "తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
      services: "1450 services including Garuda Plus, Rajdhani and more",
      altText: "Official booking partner of TGSRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first-time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book TGSRTC tickets online",
    },
    {
      image: "https://s3.rdbuz.com/web/images/homeV2/28011.png",
      name: "KERALA RTC",
      rating: "3.85",
      description: "കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ",
      services: "940 services including Swift, AC Multiaxle and more",
      altText: "Official booking partner of KSRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: "Rs. 30 discount on group booking of 4 seats",
      trustedInfo: "redBus is the most trusted place to book KSRTC KERALA tickets online",
    },
    {
      image: "https://s3.rdbuz.com/web/images/homeV2/7115.png",
      name: "KTCL",
      rating: "3.83",
      description: "कदंब येरादारी म्हामंडळ",
      services: "60 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of KTCL",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book KTCL tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "RSRTC",
      rating: "3.71",
      description: "राजस्थान स्टेट रोड ट्रांसपोर्ट कॉर्पोरशन",
      services: "6000 services including Deluxe, Ordinary and more",
      altText: "Official booking partner of RSRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: "30% concession for female passengers",
      trustedInfo: "redBus is the most trusted place to book RSRTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "SBSTC",
      rating: "3.95",
      description: "দক্ষিণবঙ্গ রাষ্ট্রীয় পরিবহণ সংস্থা",
      services: "480 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of SBSTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book SBSTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "HRTC",
      rating: "3.98",
      description: "हिमाचल रोड ट्रान्सपोर्ट कॉर्पोरेशन",
      services: "480 services including Himgaurav, Himmani and more",
      altText: "Official booking partner of HRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book HRTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "ASTC",
      rating: "4.02",
      description: "অসম ৰাজ্যিক পৰিবহন নিগম்",
      services: "200 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of ASTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book ASTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "UPSRTC",
      rating: "3.94",
      description: "उत्तर प्रदेश राज्य सड़क परिवहन निगम",
      services: "1738 services including Janrath,Shatabdi and more",
      altText: "Official booking partner of UPSRTC",
      codeInfo: null,
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book UPSRTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "WBTC",
      rating: "3.96",
      description: "পশ্চিমবঙ্গ রাষ্ট্রীয় পরিবহণ নিগম",
      services: "120 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of WBTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book WBTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "CTURTC",
      rating: "3.85",
      description: "चंडीगढ़ परिवहन उपक्रम",
      services: "143 services including AC & Non AC Bus and more",
      altText: "Official booking partner of CTU",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book CTURTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "PEPSU",
      rating: "3.83",
      description: "ਪੈਪਸੂ ਰੋਡ ਟਰਾਂਸਪੋਰਟ ਕਾਰਪੋਰੇਸ਼ਨ",
      services: "100 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of PEPSU",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book PEPSU tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "NBSTC",
      rating: "3.93",
      description: "উত্তরবঙ্গ রাজ্য পরিবহন কর্পোরেশন",
      services: "30 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of NBSTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book NBSTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "BSRTC",
      rating: "3.91",
      description: "बिहार राज्य रोड ट्रान्सपोर्ट कॉर्पोरेशन",
      services: "220 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of BSRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book BSRTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "KAAC Transport",
      rating: "3.71",
      description: "কাৰ্বি আংলং স্বায়ত্ত শাসিত পৰিষদ পৰিবহণ",
      services: "10 services including AC & Non AC Bus and more",
      altText: "Official booking partner of KAAC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book KAAC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "WBSTC",
      rating: "3.98",
      description: "পশ্চিমবঙ্গ রাষ্ট্রীয় পরিবহণ নিগম",
      services: "20 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of WBSTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book WBSTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "JKSRTC",
      rating: "3.85",
      description: "जम्मू और कश्मीर सड़क परिवहन निगम।",
      services: "16 services including Volvo Bus, AC & Non AC Bus and more",
      altText: "Official booking partner of JKSRTC",
      codeInfo: "Use code FIRST to save upto ₹250 (only for first time users)",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book JKSRTC tickets online",
    },
    {
      image: "https://www.redbus.in/",
      name: "GSRTC",
      rating: "3.74",
      description: "ગુજરાત રાજ્ય માર્ગ વાહન વ્યવહાર નિગમ",
      services: "5119 services including Gurjarnagri, Express and more",
      altText: "Official GSRTC Partner",
      codeInfo: "Use code FIRST to save upto ₹ 250 (only for first time users))",
      concessionInfo: null,
      trustedInfo: "redBus is the most trusted place to book GSRTC tickets online",
    },
  ];

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Government Buses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {buses.map((bus, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              { bus.image && <img src={bus.image} alt={bus.name} className="w-full h-20 object-contain p-2" />}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{bus.name}</h3>
                  <span className="text-sm text-gray-700">{bus.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{bus.description}</p>
                <p className="text-sm text-gray-600">{bus.services}</p>
                <p className="text-sm text-gray-600">{bus.codeInfo}</p>
                {bus.concessionInfo && <p className="text-sm text-gray-600">{bus.concessionInfo}</p>}
                <p className="text-sm text-gray-600">{bus.trustedInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernmentBuses;