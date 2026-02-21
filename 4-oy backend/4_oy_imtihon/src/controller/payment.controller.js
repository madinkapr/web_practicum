import Payments from "../schema/payment.schema.js"
import { BaseController } from "./base.controller.js";

class PaymentController extends BaseController{
    constructor(){
        super(Payments, 'student');
    }
    
}

export default new PaymentController();