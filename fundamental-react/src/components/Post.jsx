import React from "react";
import { Button } from "./UI/button/Button";

export const Post = ({ post, onDeletePost, searchedWord }) => {
  const getHighlighed = (word) => {
    const higlightingStart = word
      .toLowerCase()
      .indexOf(searchedWord.toLowerCase());

    if (higlightingStart === -1 || !searchedWord) return word;
    if (searchedWord.toLowerCase() === word.toLowerCase()) {
      return (
        <span
          style={{
            backgroundColor: "yellow",
          }}
        >
          {word}
        </span>
      );
    }

    const higlightingEnd = higlightingStart + searchedWord.length;

    const start = word.slice(0, higlightingStart);
    const higlighted = word.substr(higlightingStart, searchedWord.length);
    const end = word.slice(higlightingEnd);

    return (
      <>
        {start}
        <span
          style={{
            backgroundColor: "yellow",
          }}
        >
          {higlighted}
        </span>
        {end}
      </>
    );
  };

  const highlighedTitle = getHighlighed(post.title);
  const highlighedBody = getHighlighed(post.body);

  return (
    <article className="post">
      <div className="post__content">
        <h2 className="post__title">{highlighedTitle}</h2>
        <div className="post__body">{highlighedBody}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => onDeletePost(post.id)}>Delete post</Button>
      </div>
    </article>
  );
};
