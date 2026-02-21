import Joi from "joi";

class GroupValidation {
    create() {
        return Joi.object({
            name: Joi.string().required(),
            course: Joi.string().required(),
            teacher: Joi.string().required(),
            startDate: Joi.date().required(),
            
        })
    }
    update() {
        return Joi.object({
            name: Joi.string().optional(),
            course: Joi.string().optional(),
            teacher: Joi.string().optional(),
            startDate: Joi.date().optional(),
            
        })
    }
}

export default new GroupValidation();