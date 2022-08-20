import React from "react";
import { Post } from "./Post";

export const PostList = ({ posts, title, onDeletePost }) => {
  return (
    <section>
      {posts.length ? (
        <h2 className="postsList__title">{title}</h2>
      ) : (
        <h2 className="postsList__title">There are not posts :C</h2>
      )}
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} onDeletePost={onDeletePost} />
        ))}
      </div>
    </section>
  );
};
