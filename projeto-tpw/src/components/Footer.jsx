// HOOKS 
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// CSS
import styles from "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <a href="/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolasxs/" target="blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/NicolasXs" target="blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="copy_right">
        <span>Mari&Juana</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
