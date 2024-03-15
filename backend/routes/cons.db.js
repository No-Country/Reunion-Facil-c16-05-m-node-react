import {config} from 'dotenv'

config()

export const DB_PORT = process.env.DB_PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 3000;
export const DB_USER = process.env.DB_USER || 3000;
export const DB_PASSWORD = process.env.DB_PASSWORD || 3000;
export const DB_DATABASE = process.env.DB_DATABASE || 3000;
