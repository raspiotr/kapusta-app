import { useEffect } from "react";
import axios from "axios";

const CheckUserGoogleRedir = () => {
  useEffect(() => {
    const checkUser = async () => {
      // Pobierz token z nagłówka "AuthToken"
      const token = window.location.headers.get("AuthToken") || 0;
      //   const token =
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmM4YzcxODU0MGRlMjFkYTkxODY4ZCIsImlhdCI6MTcxMTA1MjI2NywiZXhwIjoxNzExNjU3MDY3fQ.gE9uNT0WqzjPlyO5Wl-INQqb4sWj0ScyfGZPT419SPE";

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
          const data = response.data;
          console.log("Dane użytkownika:", data);
        } else {
          console.error("Błąd:", response.statusText);
        }
      } catch (error) {
        console.error("Błąd:", error);
      }
    };

    checkUser();
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default CheckUserGoogleRedir;
