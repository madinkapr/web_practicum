import { Router } from "express";

import controller from '../controller/group.controller.js';
import group from "../validation/group.validation.js";
import { validate } from "../middleware/validate.js";

const router = Router()

router
    .post('/', validate(group.create),controller.createGroup)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .put('/:id', validate(group.update), controller.updateGroup)
    .delete('/:id', controller.delete)

export default router;