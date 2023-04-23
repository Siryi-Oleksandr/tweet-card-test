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

// UsersList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string,
//       name: PropTypes.string,
//       original_title: PropTypes.string,
//       vote_average: PropTypes.number,
//       vote_count: PropTypes.number,
//     })
//   ).isRequired,
// };

export default UsersList;
