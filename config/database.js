import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
  queueLimit: 0,
};

const connectionConfig = process.env.DATABASE_URL
  ? { uri: process.env.DATABASE_URL }
  : DEFAULT_CONFIG;

const pool = mysql.createPool(connectionConfig);

export default pool;
