export const errorRes = (res, error) => {
    const statusCode = error.statusCode ? error.statusCode : 500;
    const message = error.message ? error.message : 'Internal server error';
    return res.status(statusCode).json({
        statusCode,
        message
    });
}