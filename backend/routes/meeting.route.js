import { Router } from 'express';
const meetingRouter = Router();
import { createMeeting, getMeetingByUser } from '../controllers/meeting.controller.js';


meetingRouter.post('/', (req, res) => {
    createMeeting(req, res);
});

meetingRouter.get('/:id', getMeetingByUser);

export default meetingRouter;


