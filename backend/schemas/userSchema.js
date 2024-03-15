import z from 'zod'

export const userSchema = z.object({
    id_user: z.number(),
    username: z.string()
        .trim()
        .min(8, { message: "8 minimum characters" })
        .max(100, { message: "100 maximum characters" }),
    nickname: z.string()
        .trim()
        .min(8, { message: "8 minimum characters" })
        .max(120, { message: "120 maximum characters" }),
    email: z.string()
        .email({ message: "Invalid email" })
        .includes("@")
        .includes(".", { message: "Email must have @ and ." }),
    phone_number: z.string()
        .trim()
        .min(8, { message: "Minimum 8 digit" })
        .max(100, { message: "Maximum 20 digit" }),
    password: z.string()
        .trim()
        .min(8, { message: "8 minimum characters" })
        .max(40, { message: "40 maximum characters" }),
})

