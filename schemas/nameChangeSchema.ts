import { z } from "zod";

export const nameChangeSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Enter your correct name" })
      .max(15, { message: "Enter your correct name" }),
  })
  .refine(
    (data) => /^[\u0400-\u04FF]+$/.test(data.name),
    "Only cyrillic letters"
  );
