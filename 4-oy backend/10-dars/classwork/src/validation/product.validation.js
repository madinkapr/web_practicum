import Joi from "joi";

class ProductValidation {
    create() {
        return Joi.object({
            name: Joi.string().required(),
            description: Joi.string().optional(),
            price: Joi.number().required(),
            amount: Joi.number().required(),
            categoryId: Joi.string().required()
        })
    }

    update() {
        return Joi.object({
            name: Joi.string().optional(),
            description: Joi.string().optional(),
            price: Joi.number().optional(),
            amount: Joi.number().optional(),
            categoryId: Joi.string().optional()
        })
    }
}
export default new ProductValidation();