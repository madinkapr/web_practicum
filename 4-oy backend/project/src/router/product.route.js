import { Router } from "express";

import controller from '../controller/product.controller.js';
import { validate } from '../middleware/validate.js';
import product from '../validation/product.validation.js';

const router = Router();

router
    .post('/', validate(product.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(product.update), controller.update)
    .delete('/:id', controller.delete)

export default router;
