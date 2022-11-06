// COMPONENTS
import KitchenSinkExample from "./KitchenSinkExample";

// HOOKS
import { useEffect } from "react";
import Wave from "react-wavify";
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import styles from "./Container.css";

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
      <div className="teste">
        <div data-aos="flip-right">
          <h1>-ﾠTﾠOﾠP ㅤSﾠAﾠLﾠEﾠSﾠ-</h1> 
        </div>
        <div className="c2">
          <KitchenSinkExample />
          <KitchenSinkExample />
          <KitchenSinkExample />
        </div>
        <Wave
          className="waved"
          fill="#007915"
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
