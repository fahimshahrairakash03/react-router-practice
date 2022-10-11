import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body, userId } = post;
  const navigate = useNavigate();
  const btnnavigate = () => {
    navigate(`/friends/${userId}`);
  };

  console.log(post);
  return (
    <div>
      <h1>{title}</h1>
      <h4>{body}</h4>
      <Link to={`/friends/${userId}`}>
        <button>Get The Author</button>
      </Link>
      <button onClick={btnnavigate}>get author</button>
    </div>
  );
};

export default PostDetails;
