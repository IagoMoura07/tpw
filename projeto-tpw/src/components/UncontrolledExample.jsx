// HOOKS 
import Carousel from "react-bootstrap/Carousel";

// CSS 
import styles from "./UncontrolledExample.css";
import Logo from "../assets/logo.svg";


function UncontrolledExample() {
  return (
    <div className="sla">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Logo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-1176555906.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imageio.forbes.com/specials-images/imageserve//6296a459f150d611efd94145/0x0.jpg?format=jpg&width=1200"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
