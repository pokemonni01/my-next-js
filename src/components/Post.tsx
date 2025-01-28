import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  author: string;
  body: string;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    <div className={classes.post}>
      <Link to={`${props.id}`}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </div>
  );
};

export default Post;
