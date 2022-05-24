import { Carousel, Container } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <div className="bg-light py-10">
      <div className="sliderHeader">
        <h4>Work Highlights</h4>
        <p className="">Some of our best works from many</p>
      </div>

      <Carousel>
        <Carousel.Item className="pb-3">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-md-8">
                <img
                  className="p-3 img-fluid"
                  src="./images/slide.png"
                  alt=""
                />
              </div>
              <div className="col-md-4 ps-3 sliderText">
                <h2>Xeniapp</h2>
                <p>
                  Manage Operations. Track & maintain records of bookings,
                  payments, and customer journey· Customer Portal. Your
                  customers can book, track and approve right on
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item>

        {/* <Carousel.Item className="pb-3">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-md-8">
                <img
                  className="p-3 img-fluid"
                  src="./images/slide.png"
                  alt=""
                />
              </div>
              <div className="col-md-4 text-start ps-3">
                <h2>Xeniapp</h2>
                <p>
                  Manage Operations. Track & maintain records of bookings,
                  payments, and customer journey· Customer Portal. Your
                  customers can book, track and approve right on
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="pb-3">
          <Container>
            <div className="row d-flex align-items-center ">
              <div className="col-md-8">
                <img
                  className="p-3 img-fluid"
                  src="./images/slide.png"
                  alt=""
                />
              </div>
              <div className="col-md-4 text-start ps-3">
                <h2>Xeniapp</h2>
                <p>
                  Manage Operations. Track & maintain records of bookings,
                  payments, and customer journey· Customer Portal. Your
                  customers can book, track and approve right on.
                </p>
              </div>
            </div>
          </Container>
        </Carousel.Item> */}

      </Carousel>
    </div>
  );
};

export default Slider;
