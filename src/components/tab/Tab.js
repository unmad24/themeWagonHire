import { Card, Container } from "react-bootstrap";
import "./tab.css";
const Tab = () => {
  return (
    <Container className="py-5 tabText my-5">
      <h4 className="fw-bolder pt-2 fs-2">How to Collaborate</h4>
      <p className="pb-5 ">It’s easy, you decide what works for you best</p>
      <div className="row ">
        <div className="col-md-6">
          <Card className="text-start cards roundedTab">
            <Card.Body className="p-0">
            <img  src="./images/vector.png" alt="" />
              <Card.Title className="py-3 mb-0 titleText"> Onboard Monthly</Card.Title>
              <Card.Text className="pb-3">
              Planning to hire an offshore development team? You can onboard our developers on a monthly basis to help you every month. They will work with you dedicatedly as long as you want. 
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
        <Card className="text-start cards roundedTab">
            <Card.Body className="p-0">
            <img src="./images/vector2.png" alt="" />
              <Card.Title className="py-3 mb-0 titleText"> Get a Project Done</Card.Title>
              <Card.Text className="pb-3">
              If you are planning to develop an MVP or have an entire project plan ready to kick off, you can hire our team to get it done. We have the know-how, right tools, and process ready to cook your idea into reality.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Tab;
