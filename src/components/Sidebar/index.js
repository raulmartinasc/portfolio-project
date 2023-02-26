import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import letterR from "../../assets//images/letterR.png";
import restOfName from "../../assets/images/rest-of-name.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="letter-r" src={letterR} alt="logo" />
        <img className="sub-logo" src={restOfName} alt="raul" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="black" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="black" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="black" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/raul-martin-754246184/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="black" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/raulmartinasc"
          >
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
