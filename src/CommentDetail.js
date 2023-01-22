import React from "react";

//renders: a single comment
function CommentDetail({ comment }) {
  return (
    <div>
      <h4>{comment.email}</h4>
      <p> {comment.body}</p>
    </div>
  );
}

export default CommentDetail;
