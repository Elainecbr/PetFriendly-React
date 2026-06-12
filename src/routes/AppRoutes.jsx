import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";

// Centraliza o mapa de rotas do MVP, incluindo rota dinâmica e página 404.
export default function AppRoutes() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/:id" element={<ServiceDetail />} />
          <Route path="/agendamento" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}