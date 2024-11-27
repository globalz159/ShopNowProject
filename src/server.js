const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const routes = require('./routes');
const session = require('./config/session');

const server = express();

// Configuração da sessão
server.use(session);
server.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

// Configuração do Nunjucks
server.set('view engine', 'njk');
nunjucks.configure('src/app/views', {
  express: server,
  autoescape: true,
  noCache: process.env.NODE_ENV !== 'production',
});

// Porta dinâmica para Vercel
const PORT = process.env.PORT || 8082;
server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});
