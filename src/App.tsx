import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollTopTop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

// carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic styles
import 'swiper/css/pagination'; // If you're using pagination
import 'swiper/css/navigation'; // If you're using navigation
import SwiperCore from 'swiper';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (default is 400ms)
      offset: 390, // Offset from the top before animation starts
      once: false, // Whether animation happens once or every time you scroll
      mirror: false, // Whether elements animate when scrolling past them back up
    });
  }, []);

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

