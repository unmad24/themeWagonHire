import { Container } from "react-bootstrap";
import { FaFacebook,FaTwitter,FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <Container className="d-flex justify-content-between">
        <div className="options d-flex flex-wrap">
          <p> Blog </p> <p> About </p> <p> Terms </p> <p> License </p>
          <p> Contact </p> <p> Support </p> <p> Submit Free Template </p>
        </div>
        <div className="foot d-flex">
          <img className="down" src="./images/down.png" alt="" />
          <p> Redownload a theme </p>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="footer d-flex justify-content-between">
          <div className="icons text-start">
          <FaFacebook className="me-2"/>
           <FaTwitter className="me-2"/>
           <FaPinterest/>
          </div>
          <div className="text-end">
            <p className="m-0"> ThemeWagon Inc© 2021 </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
