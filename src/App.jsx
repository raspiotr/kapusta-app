import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ModalComment = lazy(() => import("./pages/ModalComment/ModalComment"));
const CheckUserGoogleRedir = lazy(() =>
  import("./pages/CheckUserGoogleRedir/CheckUserGoogleRedir")
);

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="login" element={<Login />} />
            <Route index element={<Home />}></Route>
            <Route path="reports" element={<Reports />} />
            <Route path="/modal-comment" element={<ModalComment />} />
            <Route path="/user-check" element={<CheckUserGoogleRedir />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
