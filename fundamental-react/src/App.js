import React from "react";

import { AddPostForm } from "./components/AddPostForm";
import { PostList } from "./components/PostList";
import PostsFilter from "./components/PostsFilter";

import "./styles/App.scss";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 4, title: "Title 4", body: "lorem4" },
    { id: 2, title: "Title 2", body: "a" },
    { id: 1, title: "b", body: "lorem" },
    { id: 3, title: "Title 3", body: "z" },
  ]);

  const [filter, setFilter] = React.useState({
    sort: "",
    query: ""
  })

  const options = [
    { value: "title", title: "Sort by title" },
    { value: "body", title: "Sort by body" },
  ];

  const getSortedPosts = () => {
    if (filter.sort) {
      return posts
        .slice()
        .sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }

  const sortedPosts = React.useMemo(getSortedPosts, [filter.sort, posts]);

  const filteredAndSortedPosts = React.useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()) ||
      post.body.toLowerCase().includes(filter.query.toLowerCase())
    );

  }, [sortedPosts, filter.query]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <main className="App">
      <AddPostForm onAddPost={addPost} />


      <section>
        {filteredAndSortedPosts.length ? (
          <>
            <h2 className="postsList__title">List of posts</h2>
          </>
        ) : (
          <h2 className="postsList__title">There are not posts :C</h2>
        )}

        <PostsFilter
          options={options}
          filter={filter}
          onChangeFilter={setFilter}
        />

        <PostList
          posts={filteredAndSortedPosts}
          title="List of posts"
          onDeletePost={deletePost}
          options={options}
          query={filter.query}
        />
      </section>
    </main>
  );
}

export default App;
