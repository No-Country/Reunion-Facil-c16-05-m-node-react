import { Router } from 'express';
const meetingRouter = Router();
import { createMeeting, getMeetingByUser } from '../controllers/meeting.controller.js';
import { validateSchema } from '../utils/validateSchema.js';
import { meetingSchema } from '../schemas/meetingSchemas.js';

meetingRouter.post('/meeting',validateSchema(meetingSchema), (req, res) => {
    createMeeting(req, res);
});

meetingRouter.get('/meeting/:id', getMeetingByUser);

export default meetingRouter;


