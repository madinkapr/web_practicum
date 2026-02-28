import { Router } from "express";

import teacherRouter from './teacher.route.js';
import studentRouter from './student.route.js';
import paymentRouter from './payment.route.js';
import groupRouter from './group.route.js';
import courseRouter from './course.route.js';

const router = Router();

router
    .use('/teachers', teacherRouter)
    .use('/students', studentRouter)
    .use('/payments', paymentRouter)
    .use('/groups', groupRouter)
    .use('/courses', courseRouter)


export default router;