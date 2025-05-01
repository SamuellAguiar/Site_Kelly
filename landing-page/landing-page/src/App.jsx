import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import AboutUs from './components/about us/AboutUs';
import Dentista1 from './components/dentista1/dentista1';
import Dentista2 from './components/dentista2/Dentista2';
import ContactForm from './components/contactForm/contactForm';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Home />
        <AboutUs />
        <Dentista1 />
        <Dentista2 />
        <ContactForm />
        <ScrollToTop />
        <Footer />
    </>
  );
}

export default App;
