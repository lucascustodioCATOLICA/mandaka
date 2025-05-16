# Como rodar:

Requisitos: node v24.0.2

1. npm i -g yarn
   baixa o yarn
2. yarn
   baixa as dependencias do projeto
3. yarn dev
   inicia um servidor de desenvolvimento do projeto

# Estrutura do projeto

1. src\infra\router\AppRouter.jsx
   Define as rotas da aplicacao.

2. src\screens
   Define as telas que sao usadas no AppRouter

3. src\components
   Define os componentes que sao usados nas telas

# Como criar uma tela

ir em src\infra\router\AppRouter.jsx e criar uma nova rota ex:
<Route path="/carrinho" element={<Carrinho />} />

especificando a url no path e o Componente React no element.

# Observacoes

1. Usar o padrao de desenvolvimento do projeto. Como q ve esse padrao? Nos arquivos do projeto porra! De uma olhada para ver como q desenvolve as paradas.
2. Lembre de criar uma branch nova para sua feature/modificacao, e criar um pull request para agent ver seu codigo, antes de mergear ele na branch master.
