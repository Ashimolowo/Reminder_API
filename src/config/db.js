//npx neon@latest init

import pg from "pg";

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

// async function getPgVersion(params) {
//     const client = await pool.connect();
//     try {
//         const result = await client.query('SELECT version()');
//         console.log(result.rows[0])
//     } catch (error) {
//        console.log(error) 
//     } finally{
//         client.release()
//     }
// }

// getPgVersion(); //run the function to verify the connection

export default pool;