import React from 'react';

import { AddPostForm } from './components/AddPostForm';
import { PostList } from './components/PostList';
import { Select } from './components/UI/select/Select';

import "./styles/App.scss";

function App() {

  const [posts, setPosts] = React.useState([
    { id: 4, title: "Title 4", body: "lorem4" },
    { id: 2, title: "Title 2", body: "lorem2" },
    { id: 1, title: "Title 1", body: "lorem" },
    { id: 3, title: "Title 3", body: "lorem3" },
  ]);

  const options = [
    { value: "title", title: "Sort by title" },
    { value: "body", title: "Sort by body" }
  ]

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  const sortPostsBy = (field) => {
    const sortedPosts = posts.slice().sort((a, b) => a[field].localeCompare(b[field]));

    console.log(sortedPosts);

    setPosts(sortedPosts);
  }

  return (
    <main className="App">
      <AddPostForm onAddPost={addPost} />
      <Select options={options} defaultTitle="No sort" onChangeSelect={sortPostsBy} />
      <PostList posts={posts} title="List of posts" onDeletePost={deletePost} />
    </main>
  );
}

export default App;
