import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./ChceckUserGoogleRedir.module.scss";

const CheckUserGoogleRedir = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      // Pobierz token z nagłówka "AuthToken"
      const token =
        window?.location?.headers?.get("AuthToken") ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmVlYWM1MzYxMjE0NDViMmRkNDY3OCIsImlhdCI6MTcxMTI3MTg0NiwiZXhwIjoxNzExODc2NjQ2fQ.dzsF1W3k-waQYQWmHmkNv4xdLAilB-gCatYGVtJak5A";
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
          console.log("Zalogowano użytkownika:", user);
          // navigate("/", { replace: true });
        } else {
          //  navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Błąd:", error);
        // navigate("/login", { replace: true });
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
