import { Router } from "express";

import controller from '../controller/payment.controller.js';


const router = Router()

router
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .put('/:id', controller.update)
    .delete('/:id', controller.delete)

export default router;