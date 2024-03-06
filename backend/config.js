import dotenv from 'dotenv';
dotenv.config();
 const PORT=process.env.PORT||3000
 const DB_HOST=process.env.DB_HOST||'localhost'
 const DB_USER=process.env.DB_USER||'root'
 const DB_PASSWORD=process.env.DB_PASSWORD||'Jeis*n16';
 const DB_NAME=process.env.DB_NAME||'reunion_amigos';
 const DB_PORT=process.env.DB_PORT||3306
export const DB_URL=`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
