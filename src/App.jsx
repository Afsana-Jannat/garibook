import BeyondDestinations from './components/BeyondDestinations';
import BookingArrival from './components/BookingArrival';
import DownloadApp from './components/DownloadApp';
import FeaturedNews from './components/FeaturedNews';
import Footer from './components/Footer';
import FreedomJourney from './components/FreedomJourney';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import PassengerTestimonials from './components/PassengerTestimonials';
import SmartDriver from './components/SmartDriver';
import TogetherSection from './components/TogetherSection';
import OurServices from './sections/OurServices';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices></OurServices>
      <FreedomJourney></FreedomJourney>
      <TogetherSection></TogetherSection>
      <BookingArrival />
      <SmartDriver />
      <FeaturedNews></FeaturedNews>
      <PassengerTestimonials></PassengerTestimonials>
      <BeyondDestinations></BeyondDestinations>
      <DownloadApp></DownloadApp>
      <Footer></Footer>
    </>
  );
}

export default App;
