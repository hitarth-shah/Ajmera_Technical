import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNewUser = ({ rowData, setRowData }) => {
  const emailMatch = /\S+@\S+\.\S+/;

  const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  console.log(newUser);

  const handleAddUserClick = () => {
    setNewUser({ id: "", name: "", email: "" });

    if (
      newUser.id.trim() &&
      newUser.name.trim() &&
      newUser.email.match(emailMatch)
    ) {
      setRowData([...rowData, newUser]);
      alert("Data Added Succesfully");
    } else {
      alert("Fill All The Details Carefully.");
    }
  };
  return (
    <div>
      <div>Add New User</div>
      <button>
        <Link to="/"> Display Users</Link>
      </button>
      <div style={{ marginTop: "50px" }}>
        <div>
          <label style={{ marginRight: "20px" }}>Id: </label>
          <input
            type="text"
            name="id"
            value={newUser.id}
            onChange={handleChange}
            placeholder="Enter Id"
            required
          />
        </div>
        <div>
          <label style={{ marginRight: "20px" }}>First Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label style={{ marginRight: "20px" }}>Email:</label>
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => handleAddUserClick()}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddNewUser;
