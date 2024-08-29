import { createPool } from "mysql";
import { config } from "dotenv";
config()

const connection = createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    multipleStatements: true,
    connectionLimit: 30
})


export {
    connection
}

