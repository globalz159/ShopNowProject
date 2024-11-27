const { Pool } = require('pg');

module.exports = new Pool({
  user: 'admin1',
  password: 'Adidas2024',
  host: 'postgre.cduewaimen75.us-east-1.rds.amazonaws.com',
  port: 5432,
  database: 'ecommerce2',
  ssl: { rejectUnauthorized: false } // Adiciona suporte a SSL
});