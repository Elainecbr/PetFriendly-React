import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

          <div className="detail-actions">
            <a
              className="btn-dashboard-link"
              href="https://petfriendly-dashboard.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dashboard PetFriendly
            </a>

            <Link to="/servicos" className="btn-back-services">
              ← Voltar aos Serviços
            </Link>
          </div>
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

          <div className="detail-actions">
            <a
              className="btn-dashboard-link"
              href="https://petfriendly-dashboard.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dashboard PetFriendly
            </a>

            <Link to="/servicos" className="btn-back-services">
              ← Voltar aos Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}