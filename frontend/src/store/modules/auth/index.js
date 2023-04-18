import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    authenticate: true,
    user: {
        token : ""
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
};