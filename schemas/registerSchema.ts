import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      //   .regex(new RegExp("/^[\u0400-\u04FF]+$/"), {
      //     message: "Only cyrillic letters",
      //   })
      .min(2, { message: "Enter your correct name" })
      .max(15, { message: "Enter your correct name" }),
    email: z.string().email("Email is not valid"),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters long")
      .max(25, "Passowrd should not be more than 25 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password should be at least 8 characters long"),
  })
  .refine(
    (data) => /^[\u0400-\u04FF]+$/.test(data.name),
    "Only cyrillic letters"
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
