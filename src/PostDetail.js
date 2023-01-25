import React from "react";
import { useEffect, useState } from "react";
import Comment from "./Comment";

function PostDetail({ post }) {

  const [clicked, setClicked] = useState(false);
  const [comments, setComments]= useState([])

  const clickHandler = () => {
    setClicked(!clicked)
  };
// console.log(post.id)
// post id is a number

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  }, []);
//we have an array of comments we want to map through

  return ( clicked? 
    comments.map((comment)=>{
      return <Comment comment={comment} />
    })
    :<div>
      <h2>{post.title}</h2>
      <p onClick={clickHandler}> {post.body} </p>
    </div>
  );
}

export default PostDetail;
