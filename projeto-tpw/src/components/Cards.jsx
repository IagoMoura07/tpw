// BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// CSS
import styles from "../styles/Cards.module.css";

function Cards() {
  return (
    <Card className={styles.card} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.discordapp.com/attachments/906179300179460127/1041415594190327828/unknown.png"
      />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <Card.Title>R$729,90</Card.Title>
        <Button variant="primary">Compre agora</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
