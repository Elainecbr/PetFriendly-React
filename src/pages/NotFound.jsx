import { Link } from "react-router-dom";

// Página de fallback para qualquer URL inexistente.
export default function NotFound() {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <Link to="/">Voltar para início</Link>
    </section>
  );
}