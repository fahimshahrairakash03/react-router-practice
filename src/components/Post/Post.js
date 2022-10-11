import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { title, body, id } = post;
  return (
    <div className="post">
      <h3>{title}</h3>
      <h6>{body}</h6>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
