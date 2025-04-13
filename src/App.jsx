import axios from 'axios';

function App() {
  const handleLogin = async () => {
    try {
      const res = await axios.get('http://localhost:8000/auth/login', {
        headers: { 'Cache-Control': 'no-cache' },
      });
      console.log("Login URL returned from backend:", res.data);
      
      if (res.data && res.data.login_url) {
        window.location.href = res.data.login_url;  
      } else {
        alert("No login URL returned from backend.");
      }
    } catch (err) {
      console.error("Login request failed", err);
      alert("Failed to login. See console.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>CircleConnect Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default App;
