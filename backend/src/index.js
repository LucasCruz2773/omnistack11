const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //avisar que estou usando json para requisições
app.use(routes);

app.listen(3333);

//ANOTAÇÕES

/**
 * Rota/Recurso
 *  Caminho
 */

/**
 * Métodos HTTP:
 * 
 *  GET: Busca uma informação no back-end
 *  POST: Criar uma informação no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetro
 * 
 * Query Params: Parâmetros nomeados e enviados na rota após o "?" (Filtros, paginação)
 *  const params = request.query; ?nome=Lucas
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 *  const params = request.params; /:id
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  const params = request.body;
 */
 
/**
 * SQL: MySQL, SQLite, PostgreSQL, etc
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where()
 */


