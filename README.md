# PetFriendly React - MVP Front-end Avancado

Aplicação front-end em React para o ecossistema PetFriendly, com foco em componentizacao, roteamento, usabilidade e organizacao de codigo para avaliacao academica.

<img width="986" height="777" alt="grafik" src="https://github.com/user-attachments/assets/a1105e65-bae2-48e1-adf8-83c8f4003936" />


## Descricao breve

Este projeto apresenta uma interface web com navegacao entre paginas, busca de servicos, tela de detalhes e fluxo de agendamento. O MVP foi desenvolvido com componentes reutilizaveis e dados simulados em JSON local, atendendo aos criterios de execucao do trabalho.

## Objetivo do projeto

- Explorar React com componentizacao em um caso pratico.
- Aplicar hooks de estado, efeito e navegacao.
- Construir uma interface responsiva com feedback visual ao usuario.
- Entregar uma base organizada para evolucao futura com APIs deployadas.

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS

## Funcionalidades

- Navegacao entre paginas com React Router.
- Busca de servicos por texto.
- Visualizacao de detalhes por rota dinamica.
- Formulario de agendamento com validacao local.
- Feedbacks visuais de carregamento, sucesso, erro e lista vazia.

## Requisitos do MVP atendidos

### Componentizacao e paginas

- Aplicacao com 3+ paginas funcionais.
- Uso de componentes reutilizaveis no layout e nos fluxos de tela.

### Componentes reutilizaveis implementados

- Header
- SearchBar
- ServiceCard
- FeedbackAlert
- LoadingSpinner

### React Router e hooks obrigatorios

- useNavigate
- useParams
- useLocation
- Rota 404 implementada

### Estado e ciclo de vida

- useState e useEffect aplicados em busca/listagem e formulario.

### Usabilidade e responsividade

- Indicador de carregamento.
- Mensagens condicionais de status.
- Layout adaptavel para desktop, tablet e celular.

### Dados simulados

- Leitura de dados locais por JSON (services.json), simulando requisicao.

## Estrutura de pastas

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

## Etapas de desenvolvimento (historico resumido)

### Etapa 1 - Base do projeto

- Inicializacao do projeto com Vite + React.
- Configuracao de roteamento e estrutura de pastas.

### Etapa 2 - Telas principais

- Implementacao das paginas Home, Services, ServiceDetail, Booking e NotFound.
- Definicao de componentes reaproveitaveis para manter consistencia.

### Etapa 3 - Usabilidade e qualidade

- Adicao de loading, alertas de status e mensagem de nenhum resultado.
- Ajustes de responsividade para diferentes tamanhos de tela.
- Validacao de lint e build.

### Etapa 4 - Preparacao para integracao externa

- Centralizacao de endpoints em arquivo de configuracao.
- Criacao de servico HTTP isolado para Dog API.
- Planejamento de deploy no Render para os servicos relacionados.

## Instalacao e execucao local

### Pre-requisitos

- Node.js 18+
- npm

### Passo a passo

1. Clonar o repositorio.
2. Entrar na pasta do projeto.
3. Instalar dependencias.
4. Executar em modo desenvolvimento.

```bash
git clone https://github.com/SEU_USUARIO/petfriendly-react.git
cd petfriendly-react
npm install
npm run dev
```

### Comandos disponiveis

- npm run dev: inicia servidor de desenvolvimento.
- npm run lint: executa verificacoes de qualidade.
- npm run build: gera build de producao.
- npm run preview: pre-visualiza build localmente.

## Documentacao dos arquivos de codigo

### Nucleo

- src/main.jsx: bootstrap do React e BrowserRouter.
- src/App.jsx: componente raiz.
- src/routes/AppRoutes.jsx: mapa de rotas, incluindo dinamica e 404.

### Paginas

- src/pages/Home.jsx: pagina inicial com navegacao e busca rapida.
- src/pages/Services.jsx: listagem com busca, loading e feedback.
- src/pages/ServiceDetail.jsx: detalhes por id com useParams.
- src/pages/Booking.jsx: formulario com validacao e mensagem de status.
- src/pages/NotFound.jsx: fallback para URL inexistente.

### Componentes reutilizaveis

- src/components/Header.jsx
- src/components/SearchBar.jsx
- src/components/ServiceCard.jsx
- src/components/FeedbackAlert.jsx
- src/components/LoadingSpinner.jsx

### Dados e integracoes

- src/data/services.json: dados simulados locais.
- src/config/api.js: configuracoes de endpoints.
- src/services/dogApi.js: camada de acesso a API externa.

### Estilos e assets

- src/styles/app.css: estilos globais e responsividade.
- public/decor/: assets estaticos servidos em producao.

## Imagens do projeto

As imagens abaixo podem ser usadas no README e na apresentacao do MVP:

![Capa PetFriendly](public/decor/caoz8.png)
![Agendamento](public/decor/caoz1.png)
![Saude canina](public/decor/caoz7.png)

## Links dos servicos relacionados (MVPs)

Atualize os links abaixo conforme seus repositorios/deploys oficiais:

- <https://petfriendly-dashboard.onrender.com/>

| Projeto | Repositorio GitHub | Deploy |
| --- | --- | --- |
| pet-web | [repositorio](https://github.com/SEU_USUARIO/pet-web) | [deploy](https://pet-web-frontend.onrender.com/) |
| petfriendly | [repositorio](https://github.com/SEU_USUARIO/petfriendly) | [deploy](https://petfriendly-dashboard.onrender.com/) |
| api-saude-dog-in pet-web | [repositorio](https://github.com/SEU_USUARIO/api-saude-dog) | [deploy](https://pet-web-frontend.onrender.com/) |
| petfriendly-react (este projeto) | [repositorio](https://github.com/SEU_USUARIO/petfriendly-react) | [deploy](https://petfriendly-react.onrender.com/) |

## Planejamento de deploy no Render

Este repositorio ja esta preparado para deploy web estatico (front-end) apos concluir os estudos do Render.

- Build command: npm run build
- Publish directory: dist

Checklist detalhado:

- docs/checklist-deploy-render.md

## SDD / Technical Implementation Plan

Para explicitar o processo de planejamento tecnico em formato alinhado a SDD (Specification-Driven Development), este projeto tambem inclui um documento de implementacao tecnica com escopo, requisitos, arquitetura, decisoes de design e criterios de validacao.

- docs/technical-implementation-plan.md

## Roteiro do video de entrega (max. 5 min)

Roteiro pronto para gravacao:

- docs/roteiro-video.md

## Evidencias para entrega final

- Repositorio publico GitHub deste front-end.
- Link do video de apresentacao.
- Links dos MVPs e APIs relacionados.
- Documento tecnico SDD / technical implementation plan.

## Autoria

Projeto desenvolvido por Elaine C. Bundscherer para a disciplina de Front-end Avancado (MVP).
