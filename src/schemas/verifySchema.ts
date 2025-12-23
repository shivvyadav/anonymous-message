import {z} from "zod";

export const verifySchema = z.object({
  verifyCode: z
    .string()
    .min(6, {error: "Verification code must be of six character"})
    .max(6, {error: "Verification code must be of six character"}),
});
