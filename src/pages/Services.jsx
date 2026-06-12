import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import servicesData from "../data/services.json";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import FeedbackAlert from "../components/FeedbackAlert";

// Página de listagem com busca, loading e feedback condicional.
export default function Services() {
  const location = useLocation();
  const initialQuery = (location.state?.initialQuery || "").trim();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState(initialQuery);
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

  function handleSearch() {
    const result = services.filter((s) =>
      s.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }

  return (
    <section className="page-shell">
      <div className="content-card">
        <h2>Serviços</h2>
        <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
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