import {z} from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast of 2 character")
  .max(20, "Username must be less than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({error: "Invalid email address"}),
  password: z.string().min(6, {error: "Password must me atleast of 6 character"}),
});
