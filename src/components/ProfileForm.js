// src/components/ProfileForm.js
import React, { useState } from "react";

const ProfileForm = ({ registerUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser({ ...user, profilePicture: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="profilePicture"
        accept="image/*"
        onChange={handleFileChange}
      />
      {user.profilePicture && (
        <img
          src={user.profilePicture}
          alt="Profile"
          style={{ width: "100px", height: "100px", marginTop: "10px" }}
        />
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default ProfileForm;
