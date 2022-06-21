const db = require("./db.js");
const { success } = require("./helpers.js");


module.exports = {
    "/v1/user": {
        get(params) {
            return success(db.user);
        }
    },
    "/v1/card": {
        post() {
            return success();
        }
    },
    "/v1/countries": {
        get() {
            return success({
                countries: [
                    { dialCode: "+372", value: "AM", text: "Armenia" },
                    { dialCode: "+673", value: "BN", text: "Brunei Darussalam" },
                    { dialCode: "+501", value: "BZ", text: "Belize" }
                ]
            });
        }
    },
    "/v1/phone/verify": {
        //send code
        get() {
            return success();
        },
        //verify code
        post() {
            return success();
        }
    },
};