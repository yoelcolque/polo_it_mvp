'use client';

import { useState } from 'react';
import { crearMascota, MascotaDTO } from './mascotaService';

export default function MascotaForm() {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [usuarioId, setUsuarioId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaMascota: MascotaDTO = {
      nombre,
      especie,
      usuarioId: parseInt(usuarioId),
    };

    try {
      await crearMascota(nuevaMascota);
      alert('Mascota registrada con éxito');
      setNombre('');
      setEspecie('');
      setUsuarioId('');
    } catch (error) {
      console.error(error);
      alert('Error al registrar la mascota');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">

      <div className="flex flex-col">
        <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">
          Nombre de la Mascota
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="especie" className="text-sm font-medium text-gray-700 mb-1">
          Especie
        </label>
        <input
          id="especie"
          type="text"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="usuarioId" className="text-sm font-medium text-gray-700 mb-1">
          ID del Usuario
        </label>
        <input
          id="usuarioId"
          type="number"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition"
      >
        Guardar Mascota
      </button>
    </form>
  );
}
