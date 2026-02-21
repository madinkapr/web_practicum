import { ApiError } from '../utils/ApiError.js';
import { errorRes } from '../utils/error-response.js';

export function validate(schema) {
    return function (req, res, next) {
        try {
            const { error } = schema().validate(req.body);
            if (error) {
                throw new ApiError(error.details[0]?.message, 422);
            }
            next();
        } catch (error) {
            return errorRes(res, error);
        }
    }
}