import { API_CONFIG, ENDPOINTS } from "../config/api";

// Serviço HTTP isolado para consulta de raças.
export async function fetchBreeds() {
  const res = await fetch(ENDPOINTS.breeds, {
    headers: {
      "x-api-key": API_CONFIG.DOG_API_KEY,
    },
  });
  if (!res.ok) throw new Error("Erro ao carregar raças");
  return res.json();
}