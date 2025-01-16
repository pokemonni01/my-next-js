import React, { Component } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";

type Props = {};

type State = {};

export default class PostList extends Component<Props, State> {
  state = {
    posts: [],
  };

  render() {
    return (
      <ul className={classes.posts}>
        <Post author="John" body="Hello, world!" />
        <Post author="Paul" body="Hi, there!" />
      </ul>
    );
  }
}
