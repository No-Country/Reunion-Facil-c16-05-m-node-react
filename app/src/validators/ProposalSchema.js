import { z } from 'zod'

export const ProposalSchema = z.object({
  date: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20)\d\d$/, { message: 'El formato es invalido' }),
  hour: z.string().regex(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { message: 'El formato es invalido' }),
  place: z.string().max(45)
})
