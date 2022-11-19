// COMPONENTS
import Cards from "./Cards";

// HOOKS
import { useEffect } from "react";
import Wave from "react-wavify";
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import styles from "../styles/Container.module.css";

const Containers = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div>
      <Wave
        className="waved"
        fill="white"
        paused={false}
        options={{
          height: 90,
          amplitude: 50,
          speed: 0.15,
          points: 2,
        }}
      />
      <div className={styles.teste}>
        <div data-aos="flip-right">
          <h1>-ﾠTﾠOﾠP ㅤSﾠAﾠLﾠEﾠSﾠ-</h1>
        </div>
        <div className={styles.c2}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Wave
          className="waved"
          fill="#006000"
          paused={false}
          options={{
            height: 90,
            amplitude: 50,
            speed: 0.15,
            points: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Containers;
