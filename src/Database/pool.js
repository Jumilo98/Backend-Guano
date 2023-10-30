import pkg from 'pg'
const {Pool} = pkg
import * as dotenv from 'dotenv'; 

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

export default pool