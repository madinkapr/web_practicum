import Joi from "joi";

class CategoryValidation {
    create() {
        return Joi.object({
            name: Joi.string().required(),
            description: Joi.string().optional()
        });
    }

    update() {
        return Joi.object({
            name: Joi.string().optional(),
            description: Joi.string().optional()
        });
    }
}

export default new CategoryValidation();
