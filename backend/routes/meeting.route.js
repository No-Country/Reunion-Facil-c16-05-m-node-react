import { Router } from 'express';
const meetingRouter = Router();
import { createMeeting, getMeetingByUser } from '../controllers/meeting.controller.js';


meetingRouter.post('/meeting', (req, res) => {
    createMeeting(req, res);
});

meetingRouter.get('/meeting/:id', getMeetingByUser);

export default meetingRouter;


