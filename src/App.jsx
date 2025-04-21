import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Replace this with your EC2 public IP or domain
    fetchfetch("http://3.148.162.26/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error("Error fetching from backend:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>React + Flask Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;