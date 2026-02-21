export function successRes(res, data, statusCode=200) {
    return res.status(statusCode).json({
        statusCode: statusCode,
        message: 'success',
        data: data
    })
}