import Students from '../schema/student.schema.js';
import { ApiError } from '../utils/ApiError.js';
import { errorRes } from '../utils/error-response.js';
import { successRes } from '../utils/success-response.js';
import { BaseController } from './base.controller.js';


class StudentsController extends BaseController {
    constructor() {
        super(Students, 'group');
    }

    createStudent = async (req, res) => {
        try {
            const existsStudent = await Students.findOne({ phone: req.body?.phone });
            if (existsStudent) {
                throw new ApiError(409, 'Student already exists');
            }
            const data = await Students.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            return errorRes(res, error)
        }
    }

    updateStudent = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id)
            const { phone } = req.body;
            if (phone) {
                const existsPhone = await Students.findOne({ phone })
                if (existsPhone && String(id) !== String(existsPhone?._id)) {
                    throw new ApiError(409, 'Phone number already taken by another student')
                }
            }
            const data = await Students.findByIdAndUpdate(id, req.body, { new: true })

            return successRes(res, data)
        } catch (error) {
            return errorRes(res, error)
        }
    }
}

export default new StudentsController();