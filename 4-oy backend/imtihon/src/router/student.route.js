import { Router } from "express";
import { validate } from "../middleware/validate.js";
import student from '../validation/student.validation.js';
import controller from '../controller/student.controller.js'

const router = Router();

router
    .post('/', validate(student.create), controller.createStudent)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .put('/:id', validate(student.update), controller.updateStudent)
    .delete('/:id', controller.delete)



export default router;