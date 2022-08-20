import React from "react";
import { Button } from "./UI/button/Button";

export const Post = ({ post, onDeletePost }) => {
  return (
    <article className="post">
      <div className="post__content">
        <h2 className="post__title">{post.title}</h2>
        <div className="post__body">{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => onDeletePost(post.id)}>Delete me</Button>
      </div>
    </article>
  );
};
