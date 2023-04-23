import { List } from './UsersList.styled';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';

function UsersList({ users }) {
  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} userInfo={user} />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.bool.isRequired,
      tweets: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsersList;
