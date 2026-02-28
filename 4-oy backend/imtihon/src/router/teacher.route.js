import { Router } from "express";

import controller from '../controller/teacher.controller.js';
import { validate } from "../middleware/validate.js";
import teacher from '../validation/teacher.validation.js';

const router = Router()

router
    .post('/', validate(teacher.create), controller.createTeacher)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .put('/:id', validate(teacher.update), controller.updateTeacher)
    .delete('/:id', controller.delete)

export default router;