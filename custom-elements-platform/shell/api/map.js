
const db = require("./db.js");
const { success } = require("./helpers.js");


module.exports = {
    "/v1/user": {
        get(params) {
            return success(db.user);
        }
    },
};