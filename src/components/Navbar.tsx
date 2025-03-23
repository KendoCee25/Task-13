// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex space-x-4">
//         <li><Link className="text-white" to="/users">Users</Link></li>
//         <li><Link className="text-white" to="/add-user">Add User</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>User Management</h1>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/add-user">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
