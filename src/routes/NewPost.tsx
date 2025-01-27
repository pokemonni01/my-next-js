import React from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, ActionFunction, redirect } from "react-router-dom";

const NewPost: React.FC = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData) as Record<string, string>;
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};
