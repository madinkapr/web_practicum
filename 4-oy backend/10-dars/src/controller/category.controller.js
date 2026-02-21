import Category from '../schema/category.schema.js';
import { BaseController } from './base.controller.js'
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';
import { ApiError } from '../utils/ApiError.js';

class CategoryController extends BaseController {
    constructor() {
        super(Category, 'products');
    }

    createCategory = async (req, res) => {
        try {
            const existsCategory = await Category.findOne({ name: req.body?.name })
            if (existsCategory) {
                throw new ApiError(409, 'Category alraedy exists')
            }
            const data = await Category.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            return errorRes(res, error);
        }
    }

    updateCategory = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id);
            const { name } = req.body;
            if (name) {
                const existsCategory = await Category.findOne({ name });
                if (existsCategory && existsCategory._id != id) {
                    throw new ApiError('Category already exists', 409);
                }
            }
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true })
            return successRes(res, data);
        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new CategoryController();