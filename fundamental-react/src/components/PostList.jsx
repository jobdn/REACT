import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Post } from "./Post";

import cl from "./PostList.module.scss";

export const PostList = ({ posts, onDeletePost, query }) => {
  return (
    <TransitionGroup>
      {posts.map((post) => (
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames={{
            // TODO: can I animate the list in the first time?
            enter: cl.enter,
            enterActive: cl.enter__active,
            exit: cl.exit,
            exitActive: cl.exit__active,
          }}
        >
          <Post post={post} searchedWord={query} onDeletePost={onDeletePost} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
