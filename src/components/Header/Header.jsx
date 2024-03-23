import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BackgroundCont from "../../components/BackgroundCont/BackgroundCont";
import Container from "../../components/Container/Container";
import AsksModals from "../AsksModals/AsksModal";
import MediaQuery from "react-responsive";
import scss from "./Header.module.scss";
import icons from "../../images/SVG/icons.svg";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    return setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        actionConfirm={handleLogout}
        text={"Do you really want to leave?"}
      />
      <header>
        <div className={scss.header}>
          <svg className={scss.logo}>
            <use xlinkHref={`${icons}#icon-logo`} />
          </svg>

          {isLoggedIn && (
            <div className={scss.usermenu}>
              <img src={user.avatarUrl} className={scss.avatar} />

              <MediaQuery minWidth={772}>
                <span className={scss.userName}>{user.name}</span>

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
          )}
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
