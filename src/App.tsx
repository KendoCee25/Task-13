// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import UserList from './components/UserList';
// import UserDetail from './components/UserDetail';
// import UserForm from './components/UserForm';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="p-4">
//         <Routes>
//           <Route path="/users" element={<UserList />} />
//           <Route path="/users/:id" element={<UserDetail />} />
//           <Route path="/add-user" element={<UserForm />} />
//           <Route path="/edit-user/:id" element={<UserForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/add-user" element={<UserForm />} />
          <Route path="/edit-user/:id" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;