import { Router } from "express";

import controller from '../controller/course.controller.js';
import course from '../validation/course.validation.js';
import { validate } from "../middleware/validate.js";

const router = Router();

router
    .post('/',validate(course.create), controller.createCourse)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .put('/:id', validate(course.update), controller.updateCourse)
    .delete('/:id', controller.delete)

export default router;