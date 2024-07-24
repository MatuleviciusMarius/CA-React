import logo from "../../assets/photos/logo.svg";
import LanguageSelectDropdown from "../LanguageSelectDropdown/LanguageSelectDropdown";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.main}>
      <img src={logo} alt="codeacademy logo" /> <LanguageSelectDropdown />
    </header>
  );
};

export default Header;
