import db from "./db.js";
import {success} from "./helpers.js";


export default {
    "/v1/user": {
        get(params) {
            return success(db.user);
        }
    }
};