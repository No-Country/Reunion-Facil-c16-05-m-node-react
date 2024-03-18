import { z } from 'zod'

export const EventSchema = z.object({
  nameEvent: z.string()
    .min(10, { message: 'Debes nombrar la reunión' })
    .max(45, { message: 'Se mas breve, por favor' }),
  describeEvent: z.string()
    .min(30, {
      message: 'Debe poseer minimo contexto'
    })
    .max(100, { message: 'Se mas breve, por favor' }),
  describePlace: z.string()
    .max(100, { message: 'Se mas breve, por favor' })
    .optional()
})
