import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (email) => {
    setUsers(users.filter(user => user.email !== email));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.email === updatedUser.email ? updatedUser : user));
  };

  return (
    <div className="app">
      <h1>Gestión de Usuarios</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      <p>Total de usuarios: {users.length}</p>
    </div>
  );
}

export default App;
