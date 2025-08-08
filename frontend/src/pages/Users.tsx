// src/pages/Users.tsx
import { useEffect, useState } from 'react';
import { getUsers } from '../api/userApi';
import type { IUser } from '../interfaces/IUser';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
