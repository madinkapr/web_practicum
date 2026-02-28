import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';
import { ApiError } from '../utils/ApiError.js';
import Groups from '../schema/group.schema.js';
import { BaseController } from './base.controller.js';

class GroupController extends BaseController {
    constructor() {
        super(Groups, ['teacher', 'course','students'])
    }
    createGroup = async (req, res) => {
        try {
            const existsGroup = await Groups.findOne({ name: req.body?.name })
            if (existsGroup) {
                throw new ApiError(409, 'Group already exists')
            }
            const data = await Groups.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            return errorRes(res, error)
        }
    }

    updateGroup = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id);
            const { name } = req.body;
            if (name) {
                const existName = await Groups.findOne({ name });
                if (existName && String(id) !== String(existName?._id)) {
                    throw new ApiError(409, '"Group name already taken by another group"');
                }
            }
            const data = await Groups.findByIdAndUpdate(id, req.body, { new: true })
            return successRes(res, data)
        } catch (error) {
            return errorRes(res, error)
        }
    }
}

export default new GroupController();