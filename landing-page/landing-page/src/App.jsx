import Navbar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AboutUs from './components/about us/AboutUs';
import Dentista1 from './components/dentista1/Dentista1';
import Dentista2 from './components/dentista2/Dentista2';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <AboutUs />
      <Dentista1 />
      <Dentista2 />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
