export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export async function getAllUsers(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [
      { id: 1, name: "Mía Resonante", email: "mia@frecuencia.ai" },
      { id: 2, name: "Yuko Amatsuki", email: "yuko@dimensiones.jp" }
    ];
  }
  
  export async function createUser(user: Omit<User, "id">): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return { id: Math.floor(Math.random() * 10000), ...user };
  }
  