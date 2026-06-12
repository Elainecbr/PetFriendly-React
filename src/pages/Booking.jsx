import { useState } from "react";
import FeedbackAlert from "../components/FeedbackAlert";

// Formulário simples de agendamento com validação local e feedback.
export default function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !date) return setMsg("Preencha nome e data.");
    setMsg("Agendamento enviado com sucesso!");
    setName("");
    setDate("");
  }

  return (
    <section className="page-shell">
      <div className="booking-layout">
        <div className="booking-form">
          <h2>Agendamento</h2>
          <form onSubmit={handleSubmit} className="form">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Enviar</button>
          </form>
          <FeedbackAlert type={msg.includes("sucesso") ? "success" : "error"} message={msg} />
        </div>
        <img
          className="booking-image"
          src="/decor/caoz1.png"
          alt="Cachorro no telefone"
        />
      </div>
    </section>
  );
}