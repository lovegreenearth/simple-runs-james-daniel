import axios from "axios";

export const authenticatedAxios = (state) => {
  return axios.create({
    headers: {
      Authoriztion: state.user.token,
    },
  });
};
