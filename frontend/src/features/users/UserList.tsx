'use client';

import { useEffect, useState } from 'react';
import { getAllUsers, User} from './userService';


export default function UserList() {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers()
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error cargando usuarios:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
      <ul className="space-y-2">
        {usuarios.map(u => (
          <li key={u.id} className="border p-3 rounded shadow">
            <strong>{u.name}</strong><br />
            <span className="text-gray-600">{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
