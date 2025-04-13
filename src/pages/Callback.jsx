import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_AUTH_API_URL}/callback`,
            { params: { code } }
          );

          const { access_token } = res.data;
          localStorage.setItem("token", access_token);
          navigate("/");
        } catch (err) {
          console.error("Login failed", err);
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return <p>Authenticating...</p>;
};

export default Callback;
