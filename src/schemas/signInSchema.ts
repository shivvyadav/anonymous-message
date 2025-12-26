import {z} from "zod";

export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string().min(6, {error: "Password must me atleast of 6 character"}),
});
