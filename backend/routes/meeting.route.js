import { Router } from 'express';
const meetingRouter = Router();
import { createMeeting } from '../controllers/meeting.controller.js';


meetingRouter.post('/', (req, res) => {
    createMeeting(req, res);
    });

export default meetingRouter;


