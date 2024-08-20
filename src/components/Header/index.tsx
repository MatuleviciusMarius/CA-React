import { Link } from "react-router-dom";
import logo from "../../assets/photos/logo.svg";
import LanguageSelectDropdown from "../LanguageSelectDropdown/LanguageSelectDropdown";
import styles from "./Header.module.scss";
import UserAvatar from "../UserAvatar/UserAvatar";

type HeaderProps = {
  isUserLoggedIn: boolean;
  name: string;
};

const Header = ({ isUserLoggedIn, name }: HeaderProps) => {
  return (
    <header className={styles.main}>
      <Link to="/">
        <img src={logo} alt="codeacademy logo" />
      </Link>
      <div className={styles.utils}>
        <LanguageSelectDropdown />

        {isUserLoggedIn && <UserAvatar name={name} />}
      </div>
    </header>
  );
};

export default Header;
