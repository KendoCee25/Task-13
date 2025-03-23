// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUser, updateUser } from '../store/userSlice';
// import { useNavigate } from 'react-router-dom';


// const UserForm = ({ existingUser }: { existingUser?: any }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(existingUser || { name: '', email: '', address: { street: '', city: '' } });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (existingUser) {
//       dispatch(updateUser(user));
//     } else {
//       dispatch(addUser({ ...user, id: Date.now() }));
//     }
//     navigate('/users');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
//       <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="block w-full p-2 border mb-2" />
//       <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="block w-full p-2 border mb-2" />
//       <input name="street" value={user.address.street} onChange={handleChange} placeholder="Street" className="block w-full p-2 border mb-2" />
//       <input name="city" value={user.address.city} onChange={handleChange} placeholder="City" className="block w-full p-2 border mb-2" />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">{existingUser ? 'Update' : 'Add'} User</button>
//     </form>
//   );
// };

// export default UserForm;

import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="user-form">
      <h2>Add/Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
