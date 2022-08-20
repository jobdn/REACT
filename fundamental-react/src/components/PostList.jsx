import React from "react";

import { Post } from "./Post";

export const PostList = ({ posts, onDeletePost, query }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          searchedWord={query}
          onDeletePost={onDeletePost}
        />
      ))}
    </div>
  );
};
