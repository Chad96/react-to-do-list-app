// src/components/UserDetails.js
import React from "react";

const UserDetails = ({ userDetails }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      {userDetails.profilePicture && (
        <img
          src={userDetails.profilePicture}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      )}
    </div>
  );
};

export default UserDetails;
