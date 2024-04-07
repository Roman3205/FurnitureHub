import { z } from "zod";

export const subscribeMailSchema = z.object({
  email: z.string().email("Email is not valid"),
});
