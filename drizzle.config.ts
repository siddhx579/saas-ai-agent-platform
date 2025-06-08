import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './drizzle',
    schema: './drizzle/schema.tsx',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});