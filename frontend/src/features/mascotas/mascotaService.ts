import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface MascotaDTO {
  nombre: string;
  especie: string;
  usuarioId: number;
}

// Mascota real que viene del backend
export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  duenio: {
    id: number;
    name: string;
    email: string;
  };
}

export const crearMascota = async (mascota: MascotaDTO) => {
  const response = await axios.post(`${BASE_URL}/mascotas`, mascota);
  return response.data;
};

export const getAllMascotas = async (): Promise<Mascota[]> => {
  const response = await axios.get<Mascota[]>(`${BASE_URL}/mascotas`);
  return response.data;
};
