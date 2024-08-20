import { useState } from "react";
import styles from "./styles.module.css";
import { logout } from "../../helpers/login";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../router/routes";

type UserAvatarProps = {
  name: string;
};

const UserAvatar = ({ name }: UserAvatarProps) => {
  const navigate = useNavigate();

  const [isShowModal, setShowModal] = useState(false);
  return (
    <div className={styles.main}>
      <div
        className={styles.icon}
        onClick={() => {
          setShowModal(!isShowModal);
        }}
      >
        <div className={styles.user}>{name[0]}</div>
        <div className={styles.arrow}></div>
      </div>

      {isShowModal && (
        <div className={styles.modal}>
          <div>{name}</div>
          <button
            onClick={() => {
              logout();
              navigate(RoutePaths.login);
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
