import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

const PostList: React.FC<PostListProps> = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Paul" body="Hi, there!" />
      </ul>
    </>
  );
};

export default PostList;
