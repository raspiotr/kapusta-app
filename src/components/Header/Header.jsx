import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import scss from "./Header.module.scss";
import BackgroundCont from "../BackgroundCont/BackgroundCont";

const Header = () => {
  return (
    <>
      <header className={scss.header}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <BackgroundCont />
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
export default Header;
