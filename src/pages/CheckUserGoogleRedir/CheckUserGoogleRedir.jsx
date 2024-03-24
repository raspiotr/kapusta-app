import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./ChceckUserGoogleRedir.module.scss";
import { setUserData } from "../../redux/auth/slice";

const CheckUserGoogleRedir = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
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
          navigate("/", { replace: true });
        } else {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Błąd:", error);
        navigate("/login", { replace: true });
      }
    };

    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.RedirBox}>
      <b className={css.RedirText}>Redirecting...</b>
    </div>
  );
};

export default CheckUserGoogleRedir;
