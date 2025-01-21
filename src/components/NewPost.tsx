import React, { useState } from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData: { author: string; body: string }) => void;
}

const NewPost: React.FC<NewPostProps> = ({ onCancel, onAddPost }) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const authorChangeHandler = (params: string) => {
    setEnteredAuthor(params);
  };

  const bodyChangeHandler = (params: string) => {
    setEnteredBody(params);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="body">Text</label>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(event) => authorChangeHandler(event.target.value)}
        />
      </p>
      <textarea
        id="body"
        required
        rows={3}
        onChange={(event) => bodyChangeHandler(event.target.value)}
      />
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
