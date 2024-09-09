import React, { useState } from 'react';

function User({ user, deleteUser, updateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newAge, setNewAge] = useState(user.age);

  const handleUpdate = () => {
    updateUser({ ...user, name: newName, age: newAge });
    setIsEditing(false);
  };

  const truncateName = (name) => {
    return name.length > 10 ? name.slice(0, 10) + '...' : name;
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input value={newAge} onChange={(e) => setNewAge(e.target.value)} />
          <button onClick={handleUpdate}>Guardar</button>
        </>
      ) : (
        <>
          <p>Nombre: {truncateName(user.name)}</p>
          <p>Correo: {user.email}</p>
          <p>Edad: {user.age}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteUser(user.email)}>Eliminar</button>
        </>
      )}
    </div>
  );
}

export default User;
