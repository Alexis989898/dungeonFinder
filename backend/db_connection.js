
import pg from 'pg'
const { Pool } = pg
const pool = new Pool({
  user: "postgres",
  password: "9898",
  host: "192.168.100.206",
  port: 5432,
  database: "Test0",
})
await pool.connect()
module.exports = pool;
 
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//console.log(res.rows[0].message) // Hello world!
//await client.end()

// config Config() {

	// connectionString?: postgres:
// }

