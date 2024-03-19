import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../Layout/Layout.module.scss";
import { Loader } from "components/Loader/Loader";
import logoKapusta from "../../images/PNG/logo icon-logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/operations";
import { UserMenu } from "../UserMenu/Usermenu";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const AuthorizedNav = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.link} end>
            <div className={styles.logoSVG}>
              <image src={logoKapusta} alt="Logo Kapusta" />
            </div>
          </Link>
        </div>
        <UserMenu />
      </div>
    );
  };

  const UnauthorizedNav = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.link} end>
            <div className={styles.logoSVG}>
              <image src={logoKapusta} alt="Logo Kapusta" />
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
