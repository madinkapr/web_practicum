import Teachers from '../schema/teacher.schema.js';
import { ApiError } from '../utils/ApiError.js';
import { errorRes } from '../utils/error-response.js';
import { successRes } from '../utils/success-response.js';
import { BaseController } from './base.controller.js';

class TeacherController extends BaseController {
    constructor() {
        super(Teachers);
    }

    createTeacher = async (req, res) => {
        try {
            const existsTeacher = await Teachers.findOne({ phone: req.body?.phone })
            if (existsTeacher) {
                throw new ApiError(409, 'Teacher already exists')
            }
            const data = await Teachers.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            return errorRes(res, error)
        }
    }

    updateTeacher = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id)
            const { phone } = req.body;
            if (phone) {
                const existsPhone = await Teachers.findOne({ phone })
                if (existsPhone && String(id) !== String(existsPhone?._id)) {
                    throw new ApiError(409, 'Phone number already taken by another teacher')
                }
            }
            const data = await Teachers.findByIdAndUpdate(id, req.body, { new: true })

            return successRes(res, data)

        } catch (error) {
            return errorRes(res, error)

        }
    }
}

export default new TeacherController();