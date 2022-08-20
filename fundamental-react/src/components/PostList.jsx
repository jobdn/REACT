import React from "react";

import { Post } from "./Post";
import SearchPostsInput from "./UI/Input";
import { Select } from "./UI/select/Select";

export const PostList = ({
  posts,
  title,
  onDeletePost,
  selectValue,
  onChangeSelect,
  options,
  searchPostsQuery,
  setSearchQuery,
}) => {
  return (
    <section>
      {posts.length ? (
        <>
          <h2 className="postsList__title">{title}</h2>
        </>
      ) : (
        <h2 className="postsList__title">There are not posts :C</h2>
      )}

      <Select
        selectValue={selectValue}
        options={options}
        defaultTitle="Sort by ..."
        onChangeSelect={onChangeSelect}
      />
      <SearchPostsInput
        value={searchPostsQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            searchedWord={searchPostsQuery}
            onDeletePost={onDeletePost}
          />
        ))}
      </div>
    </section>
  );
};
