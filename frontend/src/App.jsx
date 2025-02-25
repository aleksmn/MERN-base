import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("");

  // Получим сообщение с сервера
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to MERN base app</h1>
      <h2>{message}</h2>
      <img src="/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="" />
    </div>
  );
}

export default App;


