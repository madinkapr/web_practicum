import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';
import { ApiError } from '../utils/ApiError.js';
import { isValidObjectId } from 'mongoose';

export class BaseController {
    constructor(model, relation) {
        this.model = model;
        this.relation = relation;
    }

    create = async (req, res) => {
        try {
            const data = await this.model.create(req.body);
            return successRes(res, data, 201);
        } catch (error) {
            errorRes(res, error);
        }
    }

    findAll = async (req, res) => {
        try {
            let options = {};
            if (req.query) {
                options = req.query;
            }
            const data = await this.model.find(options).populate(this.relation);
            return successRes(res, data);
        } catch (error) {
            errorRes(res, error);
        }
    }

    findById = async (req, res) => {
        try {
            const data = await this.checkById(req.params?.id);
            return successRes(res, data);
        } catch (error) {
            errorRes(res, error);
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id);
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data);
        } catch (error) {
            errorRes(res, error);
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params?.id;
            await this.checkById(id);
            await this.model.findByIdAndDelete(id);
            return successRes(res, {});
        } catch (error) {
            errorRes(res, error);
        }
    }

    checkById = async (id) => {
        if (!isValidObjectId(id)) {
            throw new ApiError('Invalid ID', 400);
        }
        const data = await this.model.findById(id);
        if (!data) {
            throw new ApiError('Not found', 404);
        }
        return data;
    }

}