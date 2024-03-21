import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import BackgroundCont from "../../components/BackgroundCont/BackgroundCont";
import Container from "../../components/Container/Container";
import AsksModals from "../AsksModals/AsksModal";
import MediaQuery from "react-responsive";
import scss from "./Header.module.scss";
import icons from "../../images/SVG/icons.svg";

const Header = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mockUser = {
    firstName: "John",
    lastName: "Doe",
  };

  const openModalBtn = () => {
    setIsOpen(!isOpen);
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
      <AsksModals
        isOpen={isOpen}
        closeModal={openModalBtn}
        text={"Do you really want to leave?"}
      />
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
              <button onClick={openModalBtn} className={scss.exitLink}>
                <svg className={scss.actions}>
                  <use xlinkHref={`${icons}#icon-logout`} />
                </svg>
              </button>
            ) : (
              <button onClick={openModalBtn} className={scss.exitLink}>
                Exit
              </button>
            )}
          </div>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <BackgroundCont />
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};
export default Header;
