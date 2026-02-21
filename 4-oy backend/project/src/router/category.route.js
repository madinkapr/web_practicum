import { Router } from 'express';

import controller from '../controller/category.controller.js';
import { validate } from '../middleware/validate.js';
import category from '../validation/cagory.validation.js';

const router = Router();

router
    .post('/', validate(category.create), controller.createCategory)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(category.update), controller.updateCategory)
    .delete('/:id', controller.delete)

export default router;