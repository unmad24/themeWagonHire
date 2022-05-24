import { Button, Container, Form } from "react-bootstrap";
import Faq from "../components/accordion/Faq";
import HeroSection from "../components/header/HeroSection";
import NavBar from "../components/header/NavBar";
import Slider from "../components/Slide/Slider";
import Contact from "../components/tab/Contact";
import Footer from "../components/tab/Footer";
import GetFree from "../components/tab/GetFree";
import Hire from "../components/tab/Hire";
import Tab from "../components/tab/Tab";
import Testimonial from "../components/testimonials/Testimonial";
import WhyChoose from "../components/testimonials/WhyChoose";
import "./homepage.css"

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Slider />
      <Tab />
      <Hire />
      <WhyChoose />
      <Testimonial />
      <Faq />
      <GetFree />
      <Contact />

      <div>
        <Container className="mb-5 getInTouch p-3">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <div className="texts text-start">
                <h2>Get new themes and discounts in your inbox!</h2>
                <p>New themes or big discounts. Never spam.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center text-end">
              <Form.Group 
                className="mb-3 mt-3 ps-5 text-start d-flex emailBox"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control className="" type="email" placeholder="Email address"  />
                <Button className="ms-2">Subscribe</Button>
              </Form.Group>
             
            </div>
          </div>
        </Container>
      </div>
    
    <Footer/>

    </div>
  );
};

export default Homepage;
