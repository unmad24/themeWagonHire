// import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import "./tab.css";

const Hire = () => {
  return (
    <div className="bg-light">
      <Container>
        <div className="row py-5">
          <div className="col-md-6 py-5 circles">
            <div className="circle"></div>
            <div>
              <div className="d-flex">
                <div className="circle1 d-flex flex-column justify-content-center m-3">
                  <h2>100+</h2>
                  <p>
                    Delivered <br />
                    Project
                  </p>
                </div>
                <div className="circle1 d-flex flex-column justify-content-center m-3">
                  <h2>Half</h2>
                  <p>
                    Billion <br />
                    Usage
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="circle1 d-flex flex-column justify-content-center m-3">
                  <h2>40+</h2>
                  <p>
                    Expart <br />
                    Developer
                  </p>
                </div>
                <div className="circle1 d-flex flex-column justify-content-center m-3">
                  <h2>2M+</h2>
                  <p>
                    Users of <br />
                    the Code
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center text-start pb-5">
            <div className="textSection">
              <h3 className="hireText">
                Hire our <span className="colored">experienced</span> &
                <span className="colored"> skilled</span> developers
              </h3>
              <p>
                We are one of the leading UI/UX design, front-end development &
                backend development consultancy companies and are available for
                hire.
              </p>
              <p>
                Save at least <b>40%</b> of your cost than US and Europe
              </p>

              <Button>Get Quote</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hire;
