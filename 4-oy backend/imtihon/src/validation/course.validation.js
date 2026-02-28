import Joi from "joi";

class CourseValidation {
    create() {
        return Joi.object({
            title: Joi.string().required(),
            duration: Joi.number().required(),
            price: Joi.number().required(),
        });
    }

    update() {
        return Joi.object({
            title: Joi.string().optional(),
            duration: Joi.number().optional(),
            price: Joi.number().optional(),
        });
    }
}

export default new CourseValidation();
