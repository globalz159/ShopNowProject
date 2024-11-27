<h1 align="center">
  <img src=".github/logo.png" alt="ShopNow">
</h1>

## Tópicos 

[Sobre a ShopNow](#sobre-a-shopnow)

[Funcionalidades](#funcionalidades)

[Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

[Instalação e uso](#instalação-e-uso)

[Licença](#licença)

<br>

## Sobre a ShopNow

ShopNow é um projeto de e-commerce desenvolvido durante o quinto semestre da unviersidade Presbiteriana Mackenzie. Ele aborda conceitos como MVC, controle de sessões, criptografia de senhas, envio de e-mails, upload de imagens, validações no back e front end, animações, e muito mais.

<h3 align="center">Home</h3>
<p align="center">
  <img src=".github/home.png" alt="página principal">
</p>

<br>

<h3 align="center">Carrinho de Compras</h3>
<p align="center">
  <img src=".github/cart.png" alt="carrinho de compras">
</p>

<br>

<h3 align="center">Pesquisa de Produtos</h3>
<p align="center">
  <img src=".github/search.png" alt="pesquisa de produtos">
</p>

<br>

<h3 align="center">Página de Produto</h3>
<p align="center">
  <img src=".github/product.png" alt="página de produto">
</p>

<br>

## Funcionalidades

- [X] Cadastro de usuários.
- [X] Criação de anúncios.
- [X] Realização de pedidos.
- [X] Carrinho de compras.
- [X] Busca por produtos.
- [X] Upload de imagens com Multer.
- [X] Páginas dinâmicas com Nunjucks.
- [X] Banco de dados PostgreSQL.
- [X] Sistema de login e recuperação de senha.
- [X] Animações com Lottie.

<br>

## Tecnologias e Ferramentas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Express Session](https://github.com/expressjs/session)
- [Multer](https://github.com/expressjs/multer)
- [PostgreSQL](https://www.postgresql.org/)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Faker.js](https://github.com/Marak/Faker.js)
- [Lottie](https://airbnb.design/lottie/)

<br>

## Instalação e Uso

Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/) e o banco de dados [Postgres](https://www.postgresql.org/).

Siga os passos abaixo:

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone 
# ou use a opção de download.

# Entre na pasta com 
$ cd shopnow

# Instale as dependências
$ npm install

# Crie o banco de dados e as tabelas utilizando os comandos
# inclusos no arquivo "database.sql".
    
# Conexão com o banco de dados:
# Abra e edite o arquivo "db.js" dentro da pasta "src/config"
# com o seu user e password do Postgres.

# Popule o banco de dados usando o aquivo "seed.js":
$ node seed.js

# Rode a aplicação
$ npm start
