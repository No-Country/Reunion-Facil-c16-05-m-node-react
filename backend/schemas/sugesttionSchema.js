import z from ' zod'

export const sugesttionSchema = z.object({
    id_suggestion: z.number(),
    datetime: z.date().min(new Date()),
    location: z.string()
        .trim()
        .min(8, { message: "8 minimum characters" })
        .max(70, { message: "70 maximum characters" }),
    description_location: z.string()
        .trim()
        .min(8, { message: "8 minimum characters" })
        .max(100, { message: "100 maximum characters" })
})