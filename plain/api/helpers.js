module.exports = {
    success(result) { return { status: 200, result: result || {} }; },
    error(result, status) { return { status: status || 400, result: result || {} }; }
};