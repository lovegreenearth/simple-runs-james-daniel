export const login = async({ commit }, param) => {
    commit("setLoading", true);
    try {
       console.log("asdf", param)
    } catch (error) {
        console.log("asdf")
    }
    commit("setLoading", false);
};