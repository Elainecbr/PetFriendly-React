import { Link } from "react-router-dom";

// Card reutilizável para listar serviços e levar para rota de detalhe.
export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <img src={service.image} alt={service.title} />
      <div className="card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <Link to={`/servicos/${service.id}`}>
          <button className="btn-primary">Ver detalhes</button>
        </Link>
      </div>
    </article>
  );
}