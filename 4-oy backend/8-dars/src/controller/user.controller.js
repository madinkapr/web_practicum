import User from '../schema/user.schema.js';
import { ApiError } from '../utils/ApiError.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';

class UserController {
    async create(req, res) {
        try {
            const { username } = req.body;
            const existsUsername = await User.findOne({ username });
            if (existsUsername) {
                throw new ApiError(409, 'Username already exists');
            }
            const newUser = await User.create(req.body);
            return successRes(res, newUser, 201);
        } catch (error) {
            return errorRes(res, error)
        }
    }

    async findAll(_req, res) {
        try {
            const users = await User.find();
            return successRes(res, users);
        } catch (error) {
            return errorRes(res, error)
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            if (!user) {
                throw new ApiError(404, 'User not found')
            }
            return successRes(res, user);
        } catch (error) {
            return errorRes(res, error)
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const { username } = req.body;
            if (username) {
                const existsUsername = await User.findOne({ username });
                if (existsUsername && existsUsername.id !== id) {
                    throw new ApiError(409, 'Username already exists')
                }
            }
            const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
            return successRes(res, updatedUser);
        } catch (error) {
            return errorRes(res,error);
        }
    }

    async remove(req,res){
        try {
            const id = req.params.id;
            await User.findByIdAndDelete(id);
            return successRes(res,{})
        } catch (error) {
            return errorRes(res,error);
        }
    }
}

export default new UserController();