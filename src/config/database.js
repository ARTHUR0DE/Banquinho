import pg from 'pg'
const { Pool } = pg

// dotenv.config()

const client = new Pool({
    user: 'postgres',
    password: 'BemVindo!',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
}) 

export default client