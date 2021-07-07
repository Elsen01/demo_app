const pg = require('pg');


const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'elsen',
    port: 5432,
})
client.connect()

module.exports = client;