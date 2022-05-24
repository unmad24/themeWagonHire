import { Card, Container } from "react-bootstrap";

const WhyChoose = () => {
  return (
    <Container className="py-5 my-5 choose">
      <h2>Why Choose Us</h2>
      <p className="pb-4">Clients love our excellency & professionalism</p>
      <div className="row">
        <div className="col-md-4">
          <Card className="border-0">
            <Card.Body className="text-start">
              <div className="d-flex align-items-center pb-2">
                <img src="./images/Frame921.png" alt="" />
                <Card.Title className="ps-2 fs-4 fw-bolder">
                  Team Approach
                </Card.Title>
              </div>
              <Card.Text>
                Our 40+ developers have overcome various complicated problems
                over the years in React.js, Node.js and other technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0">
            <Card.Body className="text-start">
              <div className="d-flex align-items-center pb-2">
                <img src="./images/Frame10.png" alt="" />
                <Card.Title className="ps-2 fs-4 fw-bolder">
                  Proven Process
                </Card.Title>
              </div>
              <Card.Text>
                Over the last 10 years, we have developed a success-oriented
                management process to manage the projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0">
            <Card.Body className="text-start">
              <div className="d-flex align-items-center pb-2">
                <img src="./images/Frame11.png" alt="" />
                <Card.Title className="ps-2 fs-4 fw-bolder">
                  Daily Reporting
                </Card.Title>
              </div>
              <Card.Text>
                You will get a report on the works done by every developer. We
                also collect feedback and discuss strategies with you regularly.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
