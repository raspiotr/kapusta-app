import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ModalComment = lazy(() => import("./pages/ModalComment/ModalComment"));

// const Expenses = lazy(() => import("./components/Expenses/Expenses"));
// const Income = lazy(() => import("./components/Income/Income"));
// const ReportExpenses = lazy(() => import("./pages/Reports/RepExpenses"));
// const ReportIncome = lazy(() => import("./pages/Reports/RepIncome"));

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
            {/* 
            <Route
              path="login"
              element={<RestrictedRoute component={Login} path="/" />}
            />
            <Route
              path="register"
              element={<RestrictedRoute component={Register} path="/" />}
            />
            <Route
              index
              element={<PrivateRoute component={Expenses} path="/expenses" />}
            />
            <Route
              index
              element={<PrivateRoute component={Income} path="/income" />}
            />

            <Route
              index
              element={
                <PrivateRoute
                  component={ReportExpenses}
                  path="/reports/expenses"
                />
              }
            />

            <Route
              index
              element={
                <PrivateRoute component={ReportIncome} path="/reports/income" />
              }
            /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
