import { db } from "@/db";
import { agents } from "@/db/schema";
import {
  createTRPCRouter,
  baseProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { agentsInsertSchema } from "../schemas";
import { eq, getTableColumns, sql } from "drizzle-orm";
import z from "zod";

export const agentsRouter = createTRPCRouter({
  // Use protectedProcedure
  getMany: protectedProcedure.query(async () => {
    return await db.select().from(agents);
  }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgent] = await db
        .select({
          ...getTableColumns(agents),
          // TODO: Implement meeting count logic
          meetingCount: sql`COUNT(*)`,
        })
        .from(agents)
        .where(eq(agents.id, input.id));
      return existingAgent;
    }),

  create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const { auth } = ctx;
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: auth.user.id,
        })
        .returning();

      return createdAgent;
    }),
});
