import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/services.json";
import LoadingSpinner from "../components/LoadingSpinner";

// Página dinâmica que usa useParams para exibir detalhes por id.
export default function ServiceDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const service = servicesData.find((s) => String(s.id) === id);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="page-shell">
        <div className="content-card">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (!service) {
    return (
      <section className="page-shell">
        <div className="content-card">
          <p>Serviço não encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="detail-layout">
        <div className="detail-left">
          <h2>{service.detailTitle}</h2>
          <img src={service.detailImage} alt={service.title} />
        </div>
        <div className="detail-right">
          <h2>{service.id === 3 ? "Saúde Canina" : "Descrição"}</h2>
          <p>{service.detailText}</p>
        </div>
      </div>
    </section>
  );
}