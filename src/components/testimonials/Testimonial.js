import { Carousel, Container } from "react-bootstrap";
import "./testimonials.css";
const Testimonial = () => {
  return (
    <>
      <Carousel className="bg-light testimoni py-5">
        <Carousel.Item>
          <Container className="p-5">
            <div className="row d-flex align-items-center ">
              <div className="col-md-4 d-flex">
                <img className="img-fluid person" src="./images/p1.png" alt="" />
                <div className="designations text-start ps-4">
                  <h5 className="fw-bolder">Md Zahidul Islam</h5>
                  <p className="m-0">Senior Architect</p>
                  <p>
                    GovHack <img src="./images/aus.png" alt="" />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-8 text-start ps-5">
                <p className="speech">
                  {/* <span className="quotes">“</span>  */}
                   <img src="./images/Quotes.png" alt="" /> Technext is highly
                  skilled with Node.js & React.js. They have skilled programmers
                  to solve complex problems quickly and have the ability to
                  design future proof architecture. They are working with
                  cutting-edge technology and have a knack of delivering
                  excellent quality.<img src="./images/Quotes1.png" alt="" />   
                  {/* <span className="quotes">”</span> */}
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="p-5">
            <div className="row d-flex align-items-center ">
              <div className="col-md-4 d-flex">
                <img className="img-fluid person" src="./images/p1.png" alt="" />
                <div className="designations text-start ps-4">
                  <h5 className="fw-bolder">Md Zahidul Islam</h5>
                  <p className="m-0">Senior Architect</p>
                  <p>
                    GovHack <img src="./images/aus.png" alt="" />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-8 text-start ps-5">
                <p className="speech">
                  {/* <span className="quotes">“</span>  */}
                   <img src="./images/Quotes.png" alt="" /> Technext is highly
                  skilled with Node.js & React.js. They have skilled programmers
                  to solve complex problems quickly and have the ability to
                  design future proof architecture. They are working with
                  cutting-edge technology and have a knack of delivering
                  excellent quality.<img src="./images/Quotes1.png" alt="" />   
                  {/* <span className="quotes">”</span> */}
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="p-5">
            <div className="row d-flex align-items-center ">
              <div className="col-md-4 d-flex">
                <img className="img-fluid person" src="./images/p1.png" alt="" />
                <div className="designations text-start ps-4">
                  <h5 className="fw-bolder">Md Zahidul Islam</h5>
                  <p className="m-0">Senior Architect</p>
                  <p>
                    GovHack <img src="./images/aus.png" alt="" />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-8 text-start ps-5">
                <p className="speech">
                  {/* <span className="quotes">“</span>  */}
                   <img src="./images/Quotes.png" alt="" /> Technext is highly
                  skilled with Node.js & React.js. They have skilled programmers
                  to solve complex problems quickly and have the ability to
                  design future proof architecture. They are working with
                  cutting-edge technology and have a knack of delivering
                  excellent quality.<img src="./images/Quotes1.png" alt="" />   
                  {/* <span className="quotes">”</span> */}
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item>
      
       
      </Carousel>
    </>
  );
};

export default Testimonial;




 