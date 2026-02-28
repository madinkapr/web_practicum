import Joi from "joi";

class PaymentValidation {
    create(){
        return Joi.object({
            student:Joi.string().required(),
            amount: Joi.number().required(),
            pay_date: Joi.date().optional(),
        })
    }

    update(){
        return Joi.object({
            student:Joi.string().optional(),
            amount: Joi.number().optional(),
            pay_date: Joi.date().optional(),
        })
    }
}

export default new PaymentValidation();