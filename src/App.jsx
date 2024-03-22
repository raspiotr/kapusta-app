import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const CheckUserGoogleRedir = lazy(() =>
  import("./pages/CheckUserGoogleRedir/CheckUserGoogleRedir")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="reports" element={<Reports />} />
          <Route path="user-check" element={<CheckUserGoogleRedir />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
