import { shell } from "./shell.js";
import { fetchUserDetails } from "./actions.js";

init();



async function init() {
    const userDetails = await fetchUserDetails();
    await shell(userDetails);
}



