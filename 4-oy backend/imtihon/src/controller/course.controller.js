import Courses from '../schema/course.schema.js';
import { ApiError } from '../utils/ApiError.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';
import { BaseController } from './base.controller.js';

class CoursesController extends BaseController {
    constructor() {
        super(Courses);
    }

    createCourse = async (req, res) => {
        try {
            const existsCourse = await Courses.findOne({ title: req.body?.title })
            if (existsCourse) {
                throw new ApiError(409, 'Course already exists')
            }
            const data = await Courses.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            return errorRes(res, error)
        }
    }

    updateCourse = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id);
            const { title } = req.body;

            if (title) {
                const existCourse = await Courses.findOne({ title })
                if (existCourse && String(id) !== String(existCourse?._id)) {
                    throw new ApiError(409, 'Title already taken by another course')
                }
                const data = await Courses.findByIdAndUpdate(id, req.body, { new: true })
                return successRes(res, data);
            }
        } catch (error) {
            return errorRes(res, error)

        }
    }
}

export default new CoursesController();