import z from 'zod'

export const guestSchema = z.object({
    id_user_guest: z.number(),
    status_meeting_viewed: z.boolean(),
    status_accept: z.boolean(),
})