import { Link, useLocation } from "react-router-dom";

// Cabeçalho reutilizável com destaque de rota ativa via useLocation.
export default function Header() {
  const location = useLocation();

  // Marca como ativo o item atual e cobre subrotas de /servicos/:id.
  const isActive = (path) => {
    if (path === "/servicos") return location.pathname.startsWith("/servicos");
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="brand">PetFriendly React</h1>

        <nav className="nav">
          <Link className={isActive("/") ? "active" : ""} to="/">
            Início
          </Link>
          <Link className={isActive("/servicos") ? "active" : ""} to="/servicos">
            Serviços
          </Link>
          <Link className={isActive("/agendamento") ? "active" : ""} to="/agendamento">
            Agendamento
          </Link>
        </nav>
      </div>
    </header>
  );
}