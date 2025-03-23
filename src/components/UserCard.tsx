import './UserCard.css';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const UserCard = ({ user }: { user: User }) => {

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default UserCard;