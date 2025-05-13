import { defineConfig } from "drizzle-kit";
import 'dotenv/config'

export default defineConfig({
    out: "./drizzle/",
    schema: "./src/server/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        host: process.env.POSTGRES_HOST!,
        port: Number(process.env.POSTGRES_PORT) | 5432,
        user: process.env.POSTGRES_USER!,
        password: process.env.POSTGRES_PASSWORD!,
        database: process.env.POSTGRES_DB!,
        ssl: false
    }
});