import React from "react";
import { v4 as uuid } from "uuid";

import { Button } from "./UI/button/Button";
import Input from "./UI/Input";

import classes from "./AddPostForm.module.scss";

export const AddPostForm = ({ onAddPost, closeModal }) => {
  const [newPost, setNewPost] = React.useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    onAddPost({ ...newPost, id: uuid() });

    setNewPost({ title: "", body: "" });
    closeModal();
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
    <form>
      <p>
        <label htmlFor="titleInput" className={classes.addForm__label}>
          Post title
          <Input
            id="titleInput"
            value={newPost.title}
            className={classes.addForm__input}
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
        <label htmlFor="bodyInput" className={classes.addForm__label}>
          Post body
          <Input
            id="bodyInput"
            value={newPost.body}
            className={classes.addForm__input}
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
        <Button
          disabled={emptyInputs}
          onClick={addNewPost}
          className={classes.addForm__btn}
        >
          Create post
        </Button>
      </p>
    </form>
  );
};
