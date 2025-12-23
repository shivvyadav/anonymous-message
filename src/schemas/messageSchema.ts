import {z} from "zod";

export const messageSchema = z.object({
  content: z.string().min(10, {error: "Content must be atleast of 10 character"}).max(300, {
    error: "Content must be no longer than 300 character",
  }),
});
