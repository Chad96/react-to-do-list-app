import React, { useState, useEffect } from "react";

const UserDetails = ({ userDetails, updateUserDetails }) => {
  const [details, setDetails] = useState(userDetails);

  useEffect(() => {
    setDetails(userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={details.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <button type="submit">Update Details</button>
    </form>
  );
};

export default UserDetails;
