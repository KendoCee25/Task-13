import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state.user.users.find(u => u.id === Number(id)));

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserDetail;