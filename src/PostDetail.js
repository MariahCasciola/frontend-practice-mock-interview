import React from "react";

function PostsDetail({post}) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostsDetail;
