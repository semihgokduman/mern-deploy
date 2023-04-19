import { useEffect, useState } from "react";

// const url = 'http://localhost:4000'
const url = 'https://mern-deploy-backend-nndy.onrender.com'

function App() {
    const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch(url)
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
  }, []);

  return (
          <div className="App">
            <h1>{message}</h1>
          </div>
  );
}

export default App;
