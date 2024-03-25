import { useEffect, useState, startTransition } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./ChceckUserGoogleRedir.module.scss";
import { setUserData } from "../../redux/auth/slice";

const CheckUserGoogleRedir = () => {
  const [token, setToken] = useState("");
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(searchParams.get("token"));
    const checkUser = async () => {
      // Pobierz token z URL

      if (token === null) {
        navigate("/login", { replace: true });
      }
      // Wyślij żądanie GET z tokenem Bearer
      try {
        const response = await axios.get(
          "https://kapusta-backend-827563b0830f.herokuapp.com/api/auth/current",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const user = response.data.user;
          const { name, email, balance, avatarUrl } = user;
          const isLoggedIn = true;
          const token = response.data.token;
          dispatch(
            setUserData({ isLoggedIn, name, email, balance, avatarUrl, token })
          );
          navigate("/", { replace: false });
        } else {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Błąd:", error);
        navigate("/", { replace: true });
      }
    };
    startTransition(() => {
      checkUser();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className={css.RedirBox}>
      <b className={css.RedirText}>Redirecting...</b>
    </div>
  );
};

export default CheckUserGoogleRedir;
