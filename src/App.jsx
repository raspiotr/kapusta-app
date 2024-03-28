import css from "./App.module.scss";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "normalize.css";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { Header } from "./components/Header/Header";

import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const CheckUserGoogleRedir = lazy(() =>
  import("./pages/CheckUserGoogleRedir/CheckUserGoogleRedir")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.RefreshingBox}>
      <b className={css.RefreshingText}>Refreshing user...</b>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          index
          element={<PrivateRoute redirectTo="/login" component={<Home />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="/reports"
          element={<PrivateRoute redirectTo="/login" component={<Reports />} />}
        />
        <Route
          path="/user-check"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<CheckUserGoogleRedir />}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
