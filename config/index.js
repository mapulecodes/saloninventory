import { createPool } from "mysql2";
import "dotenv/config";

export const db = createPool({
  host: process.env.DBhost,
  database: process.env.DBname,
  user: process.env.DBuser,
  password: process.env.DBpassword,
  multipleStatements: true,
  connectionLimit: 30,
});
