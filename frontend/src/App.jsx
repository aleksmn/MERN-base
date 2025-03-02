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
      <header>
        <h1>Welcome to MERN base app</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <h2>{message}</h2>
      <img src="/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="" />

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos hic eos a similique fugit esse provident, et exercitationem, quidem, velit error! Molestias, voluptate rerum adipisci repudiandae suscipit quia cupiditate!</p>
      <p>Maiores commodi tenetur hic voluptas dolore culpa quisquam, sapiente cum voluptatem nisi ullam quos rerum ratione qui quas pariatur quis explicabo, accusantium odio! Fugit velit obcaecati error excepturi corporis dolorem.</p>
      <p>Aliquam enim voluptate quod incidunt. Accusamus natus harum, eius excepturi consequatur quam ipsa totam possimus iure, odio, aliquid quaerat odit dignissimos! Ipsum quas nemo vero voluptas tenetur saepe in optio?</p>
      <p>Dignissimos odit harum esse quas. Et itaque beatae provident molestias deleniti voluptatibus iure animi quos modi alias, inventore veritatis quasi molestiae, nostrum sapiente adipisci eveniet excepturi fugiat optio non facere!</p>
      <p>Id nihil facilis fugiat quaerat praesentium. Corrupti ut, id aut cupiditate eveniet assumenda qui enim ratione numquam illo iste tenetur error atque asperiores accusamus inventore excepturi! Praesentium quae sunt id.</p>
    </div>
  );
}

export default App;


