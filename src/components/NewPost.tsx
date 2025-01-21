import React from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onAuthorChange: (author: string) => void;
  onBodyChange: (body: string) => void;
  onCancel: () => void;
}

const NewPost: React.FC<NewPostProps> = ({
  onBodyChange,
  onAuthorChange,
  onCancel,
}) => {
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
