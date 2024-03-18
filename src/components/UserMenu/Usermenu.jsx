import { useScreenSize } from "../../hooks/useScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.scss";
import logoutSvg from "../../images/PNG/logout 1";
import { selectUserName } from "../../redux/Auth/selectors";

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const { mobileScreen } = useScreenSize();

  return (
    <div className={styles.container}>
      <div className={styles.userArea}>
        {mobileScreen ? (
          <span className={styles.avatar}>{firstLetter}</span>
        ) : (
          <>
            <span className={styles.avatar}>{firstLetter}</span>
            <span className={styles.name}>{userName}</span>
          </>
        )}
      </div>{" "}
      {mobileScreen ? (
        <>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <div className={styles.logoutIcon}>
              <img src={logoutSvg} alt="Logout" />
            </div>
          </button>
        </>
      ) : (
        <>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Exit
          </button>
        </>
      )}
    </div>
  );
};
