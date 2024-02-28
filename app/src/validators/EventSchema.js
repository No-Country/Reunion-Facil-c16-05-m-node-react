import { z } from 'zod'

export const EventSchema = z.object({
  nameEvent: z.string().min(10, { message: 'Debes nombrar la reunión' }),
  describeEvent: z.string().min(30, {
    message: 'Debe poseer minimo contexto'
  }).max(255),
  describePlace: z.string().max(255).optional()
})
