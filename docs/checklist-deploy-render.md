# Checklist de Deploy no Render

## 1) Preparacao do repositorio

- Confirmar que o projeto esta no GitHub publico.
- Confirmar que npm run build executa sem erros.
- Confirmar que a pasta de saida e dist.

## 2) Criar servico Web Static no Render

- Entrar em [Render](https://render.com).
- New + Static Site.
- Conectar o repositorio petfriendly-react.

## 3) Configuracao recomendada (front-end React com Vite)

- Build Command: npm run build
- Publish Directory: dist
- Branch: main (ou a branch de entrega)

## 4) Pos deploy

- Validar rotas principais no link publicado.
- Validar assets/imagens em producao.
- Testar responsividade no navegador.
- Atualizar README com o link oficial de deploy.

## 5) Deploy dos outros servicos

Para manter organizacao na entrega, publicar separadamente:

- pet-web
- petfriendly
- api-saude-dog

Depois atualizar a tabela de links no README com:

- Link do repositorio
- Link do deploy no Render

## 6) Checklist final para universidade

- Repositorio publico acessivel.
- README com titulo, descricao, instalacao e etapas de desenvolvimento.
- Video de apresentacao publicado.
- Links dos servicos e deploys preenchidos no README.
