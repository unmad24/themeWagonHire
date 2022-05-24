import { Button, Container } from "react-bootstrap";
import "./header.css";

const HeroSection = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="row py-5">
          <div className="col-md-7 txtColumn text-start">
            <div className="txtBuild">
              <h2 className="heroSectionText">
                Build Your Dream <span className="borderLine">Project</span>
              </h2>
              <p>
                Hire our <b>Expert</b> Front-end & Back-end Developers
              </p>
              <Button> Get a quote</Button>
            </div>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="./images/hero.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
