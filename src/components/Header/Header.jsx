import { Link, Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import scss from "./Header.module.scss";
import icons from "../../images/SVG/icons.svg";

const Header = ({ user }) => {
  const mockUser = {
    firstName: "John",
    lastName: "Doe",
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 772);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className={scss.header}>
          <svg className={scss.logo}>
            <use xlinkHref={`${icons}#icon-logo`} />
          </svg>

          <div className={scss.usermenu}>
            <svg className={scss.avatar}>
              <use xlinkHref={`${icons}#icon-avatar`} />
            </svg>

            <MediaQuery minWidth={772}>
              {user ? (
                <span className={scss.userName}>
                  {user.firstName} {user.lastName}
                </span>
              ) : (
                <span className={scss.userName}>
                  {mockUser.firstName} {mockUser.lastName}
                </span>
              )}

              <div className={scss.separator}></div>
            </MediaQuery>

            {isMobile ? (
              <Link to="/login">
                <svg className={scss.actions}>
                  <use xlinkHref={`${icons}#icon-logout`} />
                </svg>
              </Link>
            ) : (
              <Link to="/login" className={scss.exitLink}>
                Exit
              </Link>
            )}
          </div>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
export default Header;
