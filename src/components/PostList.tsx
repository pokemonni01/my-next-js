import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

interface Post {
  author: string;
  body: string;
}

const PostList: React.FC = () => {
  const posts = useLoaderData<Post[]>();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
