import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, phone, email } = friend;

  return (
    <div>
      <h2>Name: {name}</h2>
      <h5>Email: {email}</h5>
      <h5>Phone Number: {phone}</h5>
    </div>
  );
};

export default FriendDetails;
