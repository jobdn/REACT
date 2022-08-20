import React from "react";
import { v4 as uuid } from "uuid";

import { Button } from "./UI/button/Button";
import { Input } from "./UI/Input";

export const AddPostForm = ({ onAddPost }) => {
  const [newPost, setNewPost] = React.useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    onAddPost({ ...newPost, id: uuid() });

    setNewPost({ title: "", body: "" });
  };

  const emptyInputs = React.useMemo(
    () =>
      !Boolean(
        newPost.body.length &&
          newPost.title.length &&
          newPost.body.trim().length &&
          newPost.title.trim().length
      ),
    [newPost]
  );

  return (
    <form action="">
      <p>
        <label htmlFor="">
          Post title
          <Input
            value={newPost.title}
            onChange={(e) =>
              setNewPost((state) => {
                return { ...state, title: e.target.value };
              })
            }
            placeholder="TItle ..."
          />
        </label>
      </p>
      <p>
        <label htmlFor="">
          Post body
          <Input
            value={newPost.body}
            onChange={(e) =>
              setNewPost((state) => {
                return { ...state, body: e.target.value };
              })
            }
            placeholder="Body ..."
          />
        </label>
      </p>
      <p>
        <Button disabled={emptyInputs} onClick={addNewPost}>
          Create post
        </Button>
      </p>
    </form>
  );
};
