import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="py-10">
        <div className="row ">
          <div className="col-md-6">
            <img className="img-fluid" src="./images/Illustration.png" alt="" />
          </div>
          <div className="col-md-6 contactInput text-start">
            <h2>Let’s Win Together!</h2>
            <p>Let’s speak about your dream project</p>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your name*</Form.Label>
                <Form.Control type="name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone number*</Form.Label>
                <Form.Control type="name" />
              </Form.Group>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Company name*</Form.Label>
                <Form.Control type="name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Looking for*</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Please select from list</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your budget range (Starting from 5,000 USD)*</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Please select from list</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
