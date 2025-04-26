'use client';

import { useState } from 'react';
import { crearUsuario, UserDTO } from './userService';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoUsuario: UserDTO = {
      name,
      email,
    };

    try {
      await crearUsuario(nuevoUsuario);
      alert('Usuario registrado con éxito');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition"
      >
        Guardar Usuario
      </button>
    </form>
  );
}
