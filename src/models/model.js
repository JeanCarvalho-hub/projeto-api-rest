import dotenv from 'dotenv';
dotenv.config({path: '../../.env'});
import mysql from 'mysql2/promise';

const db = await mysql.createPool({
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 3307,
  user: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASS || '2002',
  database: process.env.DATABASE || 'aluno'
});

export default db;
