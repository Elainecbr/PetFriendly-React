// Configuração centralizada de endpoints para facilitar manutenção.
export const API_CONFIG = {
  PETFRIENDLY_API_BASE: "http://localhost:8000",
  DOG_API_BASE: "https://api.thedogapi.com/v1",
  DOG_API_KEY: "", // preencher depois
};

export const ENDPOINTS = {
  servicesJson: "/data/services.json", // fallback local
  breeds: `${API_CONFIG.DOG_API_BASE}/breeds`,
  imagesSearch: `${API_CONFIG.DOG_API_BASE}/images/search`,
};