import React from 'react';
import User from './User';

function UserList({ users, deleteUser, updateUser }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.email} user={user} deleteUser={deleteUser} updateUser={updateUser} />
      ))}
    </div>
  );
}

export default UserList;
