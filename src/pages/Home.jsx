import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

// Página inicial com CTA que demonstra uso de useNavigate.
export default function Home() {
  const navigate = useNavigate();
  const [quickQuery, setQuickQuery] = useState("");

  function handleQuickSearch() {
    navigate("/servicos", { state: { initialQuery: quickQuery } });
  }

  return (
    <section className="page-shell">
      <div className="home-layout">
        <div>
          <h2>Página Inicial</h2>
          <p>Bem-vinda ao MVP React com componentização.</p>
          <button onClick={() => navigate("/servicos")}>Ir para Serviços</button>
          <p className="home-text">Busca rápida de serviços:</p>
          <SearchBar
            value={quickQuery}
            onChange={setQuickQuery}
            onSearch={handleQuickSearch}
          />
          <p className="home-text">
            Tudo para o seu melhor amigo! Aqui você encontra informações,
            lugares e recursos úteis para o bem-estar canino.
          </p>
          <div className="home-floating-callout" aria-label="Mensagem decorativa de boas-vindas">
            <p className="home-floating-tint">Bem-vindo!</p>
            <p className="home-floating-title">
              Pet-Friendly <span aria-hidden="true">🐕‍🦺</span>
            </p>
          </div>
        </div>
        <img
          className="home-image"
          src="/decor/caoz8.png"
          alt="Filhotes"
        />
      </div>
    </section>
  );
}