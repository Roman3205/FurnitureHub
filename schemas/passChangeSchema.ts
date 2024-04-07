import { z } from "zod";

export const passChangeSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z
      .string()
      .min(8, "Password should be at least 8 characters long")
      .max(25, "Passowrd should not be more than 25 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password should be at least 8 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "Your new password can not be the same with old",
    path: ["newPassword"],
  });
