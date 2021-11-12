import "./index.scss";
import DataContext from "../../context/DataContext";
import { useContext } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const { data } = useContext(DataContext);

  console.log(data);
  return (
    <header className="main_header">
      <article className="main_header-logo">
        <h2 className="logo">
          <Link to="home" smooth={true} duration={500} spy={true} exact="true">
            acrostia
          </Link>
        </h2>
      </article>
      <nav className="main_header-nav">
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
