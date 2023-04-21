import decode from "jwt-decode";

export const getAuthToken = () => {
    const token = localStorage.getItem("simpleRunsToken")
    return token ? token : null
};

export const getAuthUserData = () => {
    const token = localStorage.getItem("simpleRunsToken")
    if (token) {
        const userInfo = decode(token)
        return userInfo
    } else {
        return null
    }
};