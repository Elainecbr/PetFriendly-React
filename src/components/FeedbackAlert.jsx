// Exibe mensagens contextuais de sucesso, erro, aviso ou info.
export default function FeedbackAlert({ type = "info", message }) {
  if (!message) return null;
  return <p className={`alert ${type}`}>{message}</p>;
}