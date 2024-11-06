import pg  from 'pg';
const { Client } = pg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'fatec',
    port: 5432,
});
await client.connect()


const result = await client.query('SELECT NOW(), foo from tabela_teste')
console.log(result)

await client.end()

// TODO: interface para o front
// TODO: interface para o front
// TODO: interface para o front