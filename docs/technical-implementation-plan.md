# Technical Implementation Plan - PetFriendly React

## 1. Contexto

O projeto PetFriendly React foi desenvolvido como MVP front-end para o ecossistema PetFriendly. O foco principal foi construir uma aplicacao web organizada, navegavel e responsiva para demonstrar boas praticas de componentizacao, roteamento e usabilidade em React.

Este documento registra o planejamento tecnico da implementacao em um formato alinhado a SDD (Specification-Driven Development), deixando explicitos escopo, requisitos, arquitetura, decisoes de design e criterios de validacao.

## 2. Problema a Resolver

O problema tratado pelo MVP e a dificuldade de apresentar, de forma simples e estruturada, servicos e informacoes de interesse para tutores de caes dentro do contexto PetFriendly.

O usuario precisa:

- navegar entre paginas sem friccao;
- localizar servicos rapidamente;
- consultar detalhes de cada servico;
- realizar um fluxo simples de agendamento;
- receber feedback visual durante a interacao.

## 3. Objetivo do Sistema

O objetivo tecnico e funcional da aplicacao e:

- demonstrar uma arquitetura front-end baseada em React;
- organizar a interface em componentes reutilizaveis;
- implementar navegacao por rotas com React Router;
- aplicar principios de usabilidade e responsividade;
- manter uma base de codigo clara para evolucao futura.

## 4. Escopo do MVP

O escopo desta versao contempla:

- pagina inicial com busca rapida;
- pagina de listagem de servicos;
- pagina de detalhes com rota dinamica;
- pagina de agendamento com validacao local;
- pagina 404 para rotas inexistentes;
- dados simulados em JSON local;
- estilos responsivos para desktop e mobile.

Fora do escopo desta entrega:

- autenticacao de usuarios no proprio front-end React;
- persistencia real em banco de dados;
- integracao completa com API propria para servicos;
- dashboard administrativo completo neste repositorio.

## 5. Requisitos Funcionais

O sistema deve:

1. permitir navegar entre Home, Services, ServiceDetail, Booking e NotFound;
2. permitir busca textual de servicos;
3. permitir filtro de servicos por categoria;
4. permitir abrir detalhes de um servico por rota dinamica;
5. permitir enviar um agendamento com validacao local;
6. exibir mensagem de lista vazia quando nao houver resultado;
7. exibir estados visuais de carregamento;
8. oferecer links de continuidade para servicos relacionados do ecossistema.

## 6. Requisitos Nao Funcionais

O sistema deve:

1. manter estrutura modular e legivel;
2. ser responsivo em diferentes larguras de tela;
3. ter baixo acoplamento entre componentes;
4. permitir manutencao simples dos dados simulados;
5. possuir build de producao gerado com Vite;
6. ser compativel com deploy estatico em Render.

## 7. Arquitetura da Solucao

O projeto segue uma arquitetura front-end baseada em SPA (Single Page Application) com renderizacao no cliente (CSR).

Fluxo estrutural:

1. o navegador carrega a aplicacao React;
2. o BrowserRouter habilita o roteamento no cliente;
3. App encaminha a renderizacao para AppRoutes;
4. AppRoutes resolve qual pagina sera exibida conforme a URL;
5. as paginas consomem componentes reutilizaveis e dados locais.

## 8. Estrutura de Pastas

```text
src/
  components/
  pages/
  routes/
  data/
  styles/
  config/
  services/
public/
  decor/
docs/
```

Responsabilidades:

- components: blocos reutilizaveis de interface;
- pages: telas principais da aplicacao;
- routes: mapa de rotas;
- data: dados simulados do MVP;
- styles: regras globais e responsividade;
- config/services: preparacao para integracoes futuras.

## 9. Estrategia de Componentizacao

Os principais componentes reutilizaveis definidos foram:

- Header
- SearchBar
- ServiceCard
- FeedbackAlert
- LoadingSpinner

Justificativa:

- reduzir duplicacao de interface;
- manter consistencia visual;
- facilitar evolucao e manutencao;
- separar responsabilidade de layout e comportamento.

## 10. Estrategia de Roteamento

O roteamento foi implementado com React Router DOM.

Rotas definidas:

- `/` -> Home
- `/servicos` -> Services
- `/servicos/:id` -> ServiceDetail
- `/agendamento` -> Booking
- `*` -> NotFound

Hooks de navegacao utilizados:

- useNavigate: navegacao programatica;
- useParams: leitura de parametro dinamico;
- useLocation: leitura da rota atual e estado de navegacao.

## 11. Estrategia de Usabilidade

Para aumentar clareza e previsibilidade para o usuario, foram implementados:

- loading visual em telas com simulacao de carregamento;
- mensagens condicionais de erro, sucesso e aviso;
- busca rapida na Home;
- filtro por categoria na listagem de servicos;
- navegacao com destaque de rota ativa;
- pagina 404 para fallback de URL invalida.

## 12. Estrategia de Responsividade

Foram aplicadas media queries e reorganizacao de layout para manter legibilidade em telas menores.

Medidas adotadas:

- grid de cards em coluna unica no mobile;
- reorganizacao das seções principais em uma coluna;
- ajuste de espacamentos e largura dos botoes;
- adaptacao do header em resolucoes menores.

## 13. Decisoes Tecnicas e Justificativas

### React

Escolhido para permitir componentizacao, clareza de estado e estrutura moderna de interface.

### Vite

Escolhido pela simplicidade de setup e rapidez no ambiente de desenvolvimento e build.

### React Router DOM

Escolhido para mapear rotas, suportar navegacao client-side e demonstrar hooks de navegacao exigidos no MVP.

### JSON Local

Escolhido para simular dados do sistema sem depender de backend para a entrega inicial.

## 14. Plano de Implementacao

### Etapa 1 - Base do projeto

- inicializacao com Vite + React;
- configuracao da estrutura de pastas;
- definicao da base de estilos e bootstrap.

### Etapa 2 - Componentizacao e paginas

- criacao de componentes reutilizaveis;
- criacao das paginas Home, Services, ServiceDetail, Booking e NotFound;
- implementacao do mapa central de rotas.

### Etapa 3 - Usabilidade

- loading visual;
- feedbacks condicionais;
- validacao do formulario de agendamento;
- experiencia de busca e lista vazia.

### Etapa 4 - Responsividade e acabamento

- media queries;
- refinamento de layout;
- preparacao para deploy.

### Etapa 5 - Evolucoes complementares

- filtro por categoria;
- link profundo para servicos relacionados do ecossistema;
- decoracoes visuais localizadas na Home.

## 15. Validacao da Implementacao

Criticos de validacao adotados:

- a aplicacao deve iniciar localmente com `npm run dev`;
- o build deve ser gerado com `npm run build` sem erro;
- as rotas principais devem renderizar corretamente;
- o estado de loading deve aparecer nas telas planejadas;
- a busca e o filtro devem alterar a listagem;
- o formulario de agendamento deve responder com feedback de erro ou sucesso;
- a interface deve continuar utilizavel em viewport mobile.

## 16. Limitacoes Conhecidas

- os dados de servicos sao locais e simulados;
- o deploy estatico pode exigir fallback especifico para rotas internas em alguns ambientes;
- o fluxo de agendamento nao persiste em backend nesta versao.

## 17. Proximos Passos

- integrar fontes reais de dados para servicos;
- consolidar fallback de SPA no deploy para rotas internas publicadas;
- evoluir acessibilidade e semantica de componentes;
- ampliar integracao com os demais projetos do ecossistema PetFriendly.

## 18. Conclusao

O MVP foi implementado com uma estrutura coerente com SDD: requisitos definidos, arquitetura modular, decisoes tecnicas justificadas e validacao orientada a comportamento. O resultado e uma base front-end clara, reutilizavel e apropriada para apresentacao academica e extensao futura.
