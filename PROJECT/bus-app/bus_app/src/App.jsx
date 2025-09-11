import Header from "./components/Header";
import GovernmentBuses from './components/GovermentBuses'
import Hero from "./components/Hero";
import HowToBook from './components/HowToBook'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
import WhyChooseRedBus from './components/WhyChoseRedBus'
import AboutRedBus from './components/AboutRedBus'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Offers />
      <GovernmentBuses />
      <Testimonials />
      <AboutRedBus />
      <WhyChooseRedBus />
      <HowToBook />
      
    </div>
  );
}

export default App;