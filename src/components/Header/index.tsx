import { Link } from "react-router-dom";
import logo from "../../assets/photos/logo.svg";
import LanguageSelectDropdown from "../LanguageSelectDropdown/LanguageSelectDropdown";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.main}>
      <Link to="/">
        <img src={logo} alt="codeacademy logo" />
      </Link>{" "}
      <LanguageSelectDropdown />
    </header>
  );
};

export default Header;
