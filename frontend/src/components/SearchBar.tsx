export default function SearchBar() {
    return (
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Buscar mascotas"
          className="w-80 p-3 rounded-l-md text-gray-700"
        />
        <button className="bg-orange-600 p-3 rounded-r-md text-white">
          🔍
        </button>
      </div>
    );
  }
  