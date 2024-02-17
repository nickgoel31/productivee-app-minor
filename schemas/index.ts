import { z } from "zod";

export const WorkspaceSchema = z.object({
    name: z.string().max(14),
    desc: z.string().optional()
})