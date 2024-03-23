import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckUserGoogleRedir = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      // Pobierz token z nagłówka "AuthToken"
      const token = window.location.headers?.get("AuthToken") || null;
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmM4YzcxODU0MGRlMjFkYTkxODY4ZCIsImlhdCI6MTcxMTE0MzI3OSwiZXhwIjoxNzExNzQ4MDc5fQ.j9INlHWFPOSrh76XsS8QjTl_qjdqG4Zm5YrRcP9WCRM";
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
          const name = response.data.user.name;
          console.log("Zalogowano użytkownika:", name);
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
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default CheckUserGoogleRedir;
