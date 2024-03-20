import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ModalComment = lazy(() => import("./pages/ModalComment/ModalComment"));

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route index element={<Home />}></Route>
            <Route path="reports" element={<Reports />} />
            <Route path="/modal-comment" element={<ModalComment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
