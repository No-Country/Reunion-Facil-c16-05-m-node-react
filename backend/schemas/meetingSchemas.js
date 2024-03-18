import z from 'zod';

export const meetingSchema = z.object({
   title: z.string().trim().min(10, { message: 'min. 10 characters' }).max(45, {
      message: 'max. 45 characters'
   }),
   description: z.string().trim().min(30,{ message: 'min. 30 characters' }).max(100,{ message: 'max. 100 characters' }),
   id_user_org: z.number(),
   datetime: z.string({required_error:'is required'}),
   location: z.string().trim().min(10,{ message: 'min. 30 characters' }).max(70,{ message: 'max. 70 characters' }),
   description_location: z.string().trim().max(100,{message: 'max. 70 characters'}).optional(),
   guests: z.array(z.number())
});