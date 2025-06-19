import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { db } from "../../../../drizzle";
import { agents } from "../../../../drizzle/schema";

export const agentsRouter = createTRPCRouter({
    getMany: baseProcedure.query(async () => {
        const data = await db.select().from(agents);
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return data;
    }),
});