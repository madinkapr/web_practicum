import Joi from "joi";

class StudentValidation {
    create() {
        return Joi.object({
            fullName: Joi.string().required(),
            phone: Joi.string().required(),
            age: Joi.number().optional(),
            group:Joi.string().required()

        })
    }

    update() {
        return Joi.object({
            fullName: Joi.string().optional(),
            phone: Joi.string().optional(),
            age: Joi.number().optional(),
            group:Joi.string().optional()
        })
    }
}

export default new StudentValidation();