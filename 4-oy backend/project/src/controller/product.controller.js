import Product from '../schema/product.schema.js';
import { BaseController } from './base.controller.js';

class ProductController extends BaseController {
    constructor() {
        super(Product);
    }
}

export default new ProductController();
