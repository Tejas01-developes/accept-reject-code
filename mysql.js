import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
 const db=mysql.createConnection({
    database:process.env.MYSQL_DB,
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    password:process.env.MYSQL_PASS,
    user:process.env.MYSQL_ROOT
    
})
export default db