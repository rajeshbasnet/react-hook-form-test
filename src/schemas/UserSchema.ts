import * as zod from "zod";

export const schema = zod.object({
  username: zod.string().min(4, {
    message: "Username must be 4 characters long",
  }),
  email: zod.string().email({ message: "Invalid email format" }),
  numbers: zod.array(zod.string()),
  channel: zod
    .string()
    .min(4, { message: "Channel should be 4 character long" }),
  currentNumber: zod.string(),
  phNumbers: zod.array(
    zod.object({
      number: zod.string(),
    })
  ),
});
