const Pool = require( 'pg' ).Pool
const pool = new Pool ({
    host: 'pucmgian.postgres.database.azure.com',
    user: 'ian@pucmgian',
    password:'Boladegude1996#',
    database:'projeto',
    port: 5432
});
module.exports = pool;

