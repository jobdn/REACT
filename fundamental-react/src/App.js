import React from "react";

import { AddPostForm } from "./components/AddPostForm";
import { PostList } from "./components/PostList";

import "./styles/App.scss";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 4, title: "Title 4", body: "lorem4" },
    { id: 2, title: "Title 2", body: "a" },
    { id: 1, title: "b", body: "lorem" },
    { id: 3, title: "Title 3", body: "z" },
  ]);
  const [selectValue, setSelectValue] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const options = [
    { value: "title", title: "Sort by title" },
    { value: "body", title: "Sort by body" },
  ];

  const getSortedPosts = () => {
    console.log("getSortedPosts was called!!!");
    if (selectValue) {
      return posts
        .slice()
        .sort((a, b) => a[selectValue].localeCompare(b[selectValue]));
    }

    return posts;
  }

  const sortedPosts = React.useMemo(getSortedPosts, [posts, selectValue]);

  const filteredAndSortedPosts = React.useMemo(() => {

    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.body.toLowerCase().includes(searchQuery.toLowerCase()));

  }, [sortedPosts, searchQuery])

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const sortPostsBy = (field) => {
    console.log(field);
    setSelectValue(field);
  };

  return (
    <main className="App">
      <AddPostForm onAddPost={addPost} />
      <PostList
        posts={filteredAndSortedPosts}
        title="List of posts"
        onDeletePost={deletePost}
        selectValue={selectValue}
        onChangeSelect={sortPostsBy}
        options={options}
        searchPostsQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </main>
  );
}

export default App;
