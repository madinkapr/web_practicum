import Joi from "joi";

class TeacherValidation {
    create() {
        return Joi.object({
            fullName: Joi.string().required(),
            phone: Joi.string().required(),
            specialty: Joi.string().required(),

        })
    }

    update() {
        return Joi.object({
            fullName: Joi.string().optional(),
            phone: Joi.string().optional(),
            specialty: Joi.string().optional(),

        })
    }
}

export default new TeacherValidation();