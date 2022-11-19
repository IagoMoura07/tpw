// HOOKS
import Carousel from "react-bootstrap/Carousel";

// CSS
import Logo from "../assets/logo.svg";
import styles from "../styles/Carousell.module.css";

function Carousell() {
  return (
    <div className={styles.sla}>
      <Carousel>
        <Carousel.Item>
          <img
            className={`${styles.d_block} w-100`}
            src={Logo}
            alt="First slide"
          />
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

export default Carousell;
