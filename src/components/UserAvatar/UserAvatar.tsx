import { useState } from "react";
import styles from "./styles.module.css";
import { logout } from "../../helpers/login";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../router/routes.ts";
import { useTranslation } from "react-i18next";

type UserAvatarProps = {
  name: string;
};

const UserAvatar = ({ name }: UserAvatarProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <Link to={RoutePaths.settings}>{name}</Link>
          <button
            onClick={() => {
              logout();
              navigate(RoutePaths.login);
            }}
          >
            {t("sign_out")}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
