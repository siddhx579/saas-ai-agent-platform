import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "../../../../drizzle";
import { agents } from "../../../../drizzle/schema";
import { agentsInsertSchema } from "../schemas";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const agentsRouter = createTRPCRouter({
    getOne: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
        const [existingAgent] = await db.select().from(agents).where(eq(agents.id, input.id));
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return existingAgent;
    }),
    getMany: baseProcedure.query(async () => {
        const data = await db.select().from(agents);
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return data;
    }),
    create: protectedProcedure
        .input(agentsInsertSchema)
        .mutation(async ({ input, ctx }) => {
            const [createdAgent] = await db
                .insert(agents)
                .values({
                    ...input,
                    userId: ctx.auth.user.id,
                })
                .returning();
            return createdAgent;
        })
});