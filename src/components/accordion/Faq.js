import { Accordion, Container } from "react-bootstrap";
import "./accordion.css"
const Faq = () => {
  return (
    <Container className="py-10">
      <div className="row">
        <div className="col-md-4">
          <h2 className=" faqText">
            Find your all project related questions
          </h2>
        </div>
        <div className="col-md-8 acc">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accHeader">What time zone do you work?</Accordion.Header>
              <Accordion.Body className="text-start details">
              We’re flexible and maintain at least 2 overlapping workings hours with US time zone for meetings, plannings & review.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="fw-bolder accHeader">What project management tool you use?</Accordion.Header>
              <Accordion.Body className="text-start details">
              We usually use Trello, Jira, Clickup. Sometimes clients prefer using Google spreadsheet. We’re flexible with any.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="fw-bolder accHeader">Do I get the same person everyday?</Accordion.Header>
              <Accordion.Body className="text-start details">
              Yes, the same person will be dedicated for your tasks, everyday. We use Zoom, Google meet, Slack, Skype, WhatsApp to chat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="fw-bolder accHeader">How often can we communicate?</Accordion.Header>
              <Accordion.Body className="text-start details">
              You can communicate continuously. We belive communicating properly is the bridge between goals & achievements.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="fw-bolder accHeader">Do you allow refund or trial?</Accordion.Header>
              <Accordion.Body className="text-start details">
              Yes, we have a trial period policy for the monthly basis hiring. We allow refund of the initial payment if work doesn’t start.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
