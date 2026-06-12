// Campo de busca reutilizável controlado por estado da página pai.
export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="searchbar">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar serviço..."
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}