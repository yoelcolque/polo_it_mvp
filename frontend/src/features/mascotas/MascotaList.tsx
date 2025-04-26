'use client';

import { useEffect, useState } from 'react';
import { getAllMascotas, Mascota } from './mascotaService';

export default function MascotaList() {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMascotas()
      .then(setMascotas)
      .catch(err => console.error('Error al cargar mascotas:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando mascotas...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Mascotas Registradas</h2>
      <ul className="space-y-2">
        {mascotas.map(m => (
          <li key={m.id} className="border p-3 rounded shadow">
            <strong>{m.nombre}</strong> ({m.especie})<br />
            <span className="text-sm text-gray-600">
              Dueño: {m.duenio.name} – {m.duenio.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
