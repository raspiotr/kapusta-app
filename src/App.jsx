import { useState } from "react";
import "./App.css";

const Header = lazy(() => import('./components/Header/Header'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Registration/Register'));
const Expenses = lazy(() => import('./pages/Home/Expenses'));
const Income = lazy(() => import('./pages/Home/Income'));
const ReportExpenses = lazy(() => import('./pages/Reports/RepExpenses'));
const ReportIncome = lazy(() => import('./pages/Reports/RepIncome'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
      <Route path="/" element={<Header />}>
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
            element={<PrivateRoute component={ReportExpenses} path="/reports/expenses" />}
          />
                 
          <Route
            index
            element={<PrivateRoute component={ReportIncome} path="/reports/income" />}
          />

          

          <Route path="*" element={<NotFound />} />  

        </Route>
      </Routes>
    </Suspense>
  </>
 );
}

export default App;
