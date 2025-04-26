import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface UserDTO {
  name: string;
  email: string;
}

export interface User extends UserDTO {
  id: number; // ← necesario para mostrar lista
}

export const crearUsuario = async (usuario: UserDTO) => {
  const response = await axios.post(`${BASE_URL}/users`, usuario);
  return response.data;
};



export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
};




