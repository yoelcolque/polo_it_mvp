import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: "url('/images/fondo-layao.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex justify-end pointer-events-none z-10">
        <Image
          src="/images/perrito.png"
          alt="Perro superpuesto"
          width={500}
          height={500}
          className="opacity-90 object-contain"
        />
      </div>
      <div className="flex flex-col items-start ml-0 px-4 py-1 space-y-3 z-20">
        <Hero />
        
        {/* Enlace a lista de usuarios */}
        <a
          href="/users"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Ir a lista de usuarios →
        </a>

        {/* Enlace a lista de usuarios */}
        <a
          href="/mascotas"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Ir a lista de mascotas →
        </a>

        {/* Enlace a registrar usuario */}
        <a
          href="/users/register"
          className="underline text-green-600 hover:text-green-800"
        >
          Registrar persona →
        </a>

        {/* Enlace a registrar mascota */}
        <a
          href="/mascotas/register"
          className="underline text-purple-600 hover:text-purple-800"
        >
          Registrar mascota →
        </a>

        <SearchBar />
      </div>
    </main>
  );
}
