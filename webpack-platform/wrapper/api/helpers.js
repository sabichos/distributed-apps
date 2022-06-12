export function success(result) { return { status: 200, result: result || {} }; }
export function error(result, status) { return { status: status || 400, result: result || {} }; }