import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default UserCard;