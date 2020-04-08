import React from 'react';
import UserItem from './UserItem.js';
import Spinner from '../layouts/Spinner.js'
import propTypes from 'prop-types';

const Users = ({ users, loading }) => {

    if(loading) {
        return <Spinner />
    }

    const usersBank = users.map((user) => <UserItem key={user.id} user={user} />);

    return <div style={userStyle}>{usersBank}</div>;
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propTypes = {
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}
export default Users;
