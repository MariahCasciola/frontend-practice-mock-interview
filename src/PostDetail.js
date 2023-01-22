import React from "react";
import { useState, useEffect } from "react";
import CommentDetail from "./CommentDetail";

function PostsDetail({ post }) {
  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p onClick={handleClick} >{post.body}</p>
      {clicked ? comments.map((comment, key)=>{
        return <CommentDetail key={key} comment={comment} />
      }) : null}
    </div>
  );
}

export default PostsDetail;
