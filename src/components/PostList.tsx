import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList: React.FC = () => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const handleAuthorChange = (author: string) => {
    console.log("Author updated:", author);
    setEnteredAuthor(author);
  };

  const handleBodyChange = (body: string) => {
    console.log("Body content updated:", body);
    setEnteredBody(body);
  };

  return (
    <>
      <Modal>
        <NewPost
          onAuthorChange={handleAuthorChange}
          onBodyChange={handleBodyChange}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Paul" body="Hi, there!" />
      </ul>
    </>
  );
};

export default PostList;
