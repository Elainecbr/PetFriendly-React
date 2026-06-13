import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import servicesData from "../data/services.json";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import FeedbackAlert from "../components/FeedbackAlert";

// Categorias disponíveis para filtro
const AVAILABLE_CATEGORIES = [
  "parque",
  "café",
  "restaurante",
  "veterinária",
  "hospital",
  "clínica",
  "hotel",
  "pousada",
  "bistrô",
];

// Página de listagem com busca, loading e feedback condicional.
export default function Services() {
  const location = useLocation();
  const initialQuery = (location.state?.initialQuery || "").trim();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // Simula latência para demonstrar estado de carregamento no MVP.
    const timer = setTimeout(() => {
      const normalizedInitialQuery = initialQuery.toLowerCase();
      const initialFiltered = normalizedInitialQuery
        ? servicesData.filter((s) =>
            s.title.toLowerCase().includes(normalizedInitialQuery)
          )
        : servicesData;

      setServices(servicesData);
      setFiltered(initialFiltered);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [initialQuery]);

  function applyFilters() {
    let result = services;

    // Filtro por texto
    if (query.trim()) {
      result = result.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtro por categoria
    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }

    setFiltered(result);
  }

  function handleSearch() {
    applyFilters();
  }

  function handleCategoryChange(e) {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    // Aplicar filtros imediatamente quando categoria muda
    let result = services;
    if (query.trim()) {
      result = result.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (newCategory) {
      result = result.filter((s) => s.category === newCategory);
    }
    setFiltered(result);
  }

  return (
    <section className="page-shell">
      <div className="content-card">
        <h2>Serviços</h2>
        <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
        
        {/* Dropdown de Filtro de Categorias */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="category-filter" style={{ marginRight: "0.5rem", fontWeight: "500" }}>
            Filtrar por categoria:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <option value="">Todas as categorias</option>
            {AVAILABLE_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {loading && <LoadingSpinner />}
        {!loading && filtered.length === 0 && (
          <FeedbackAlert type="warning" message="Nenhum item encontrado." />
        )}
        <div className="grid">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}