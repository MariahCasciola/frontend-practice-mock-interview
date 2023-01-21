import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(posts);
  return (
    <div className="App">
      {posts.map((post, index) => {
        return <PostDetail key={index} post={post} />;
      })}
    </div>
  );
}

export default App;
