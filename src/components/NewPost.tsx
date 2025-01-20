import React from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onAuthorChange: (author: string) => void;
  onBodyChange: (body: string) => void;
}

const NewPost: React.FC<NewPostProps> = ({ onBodyChange, onAuthorChange }) => {
  const authorChangeHandler = (params: string) => {
    onAuthorChange(params);
  };

  const bodyChangeHandler = (params: string) => {
    onBodyChange(params);
  };

  return (
    <form className={classes.form}>
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
    </form>
  );
};

export default NewPost;
