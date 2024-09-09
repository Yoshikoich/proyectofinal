import React, { useState } from 'react';

function App() {
  // Estado inicial con algunos usuarios ficticios
  const [users, setUsers] = useState([
    { id: 1, name: 'Rhaenyra', email: 'queentargaryen@westeros.com', age: 36 },
    { id: 2, name: 'Sylax', email: 'dragon@valyrio.com', age: 30 },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });
  const [searchTerm, setSearchTerm] = useState('');

  // Función para agregar un nuevo usuario
  const addUser = () => {
    const userId = users.length + 1;
    setUsers([...users, { id: userId, ...newUser }]);
    setNewUser({ name: '', email: '', age: '' });
  };

  // Función para eliminar un usuario
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Función para buscar un usuario específico
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Truncar nombre si es mayor de 10 caracteres
  const truncateName = (name) => {
    return name.length > 10 ? name.substring(0, 10) + '...' : name;
  };

  return (
    <div id = "todo" style={{ padding: '20px' }}>
      <h1>CRUD Final</h1>

      {/* Formulario para agregar usuario */}
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Edad"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button id = "butoneAdd" onClick={addUser}>Agregar Usuario</button>
      </div>

      {/* Buscador de usuarios */}
      <div>
        <input
          type="text"
          placeholder="Buscar usuario"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Listado de usuarios */}
      <h2>Lista Total de Usuarios</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {truncateName(user.name)} - {user.email} - {user.age} años
            <button id = "butoneElim" onClick={() => deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {/* Total de usuarios */}
      <h3>Total de usuarios registrados: {users.length}</h3>
    </div>
  );
}

export default App;
