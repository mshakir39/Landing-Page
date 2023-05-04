
import NavBar from '../src/Components/Navbar/navBar';
import Hero from '../src/Components/Hero/hero';
import Partners from '../src/Components/Partners/partners';
import AboutUs1 from '../src/Components/AboutUs1/aboutUs';
import Products from '../src/Components/Products/products';
import Process from '../src/Components/Process/process';
import Quote from '../src/Components/Quote/quote';
import Services from '../src/Components/Servicess/services';
import Experience1 from '../src/Components/Experience1/experience';
import Experience2 from '../src/Components/Experience2/experience';
import CaseStudies from '../src/Components/CaseStudies/caseStudies';
import AboutUs2 from '../src/Components/AboutUs2/aboutUs';
import Testimonial from '../src/Components/Testimonial/testimonial';
import Contact from '../src/Components/Contact/contact';
import Footer from '../src/Components/Footer/footer';
export default function App() {


  return (
    <div className=''>
      <NavBar />
      <div className='flex flex-col '>
        <Hero />
        <Partners />
        <AboutUs1 />
        <Products />
        <Process />
        <Quote />
        <Services />
        <Experience1 />
        <Experience2 />
        <CaseStudies />
        <AboutUs2 />
        <Testimonial />
        <Contact />
        <Footer />
      </div>

    </div>


  );
}