import axiosClient from "./axiosClient";

const infoAIP = {
  postBanner: (data) => {
    const url = "/api/banner";
    return axiosClient.post(url, data);
  },
  getBanner: () => {
    const url = "/api/banner";
    return axiosClient.get(url);
  },
};

export default infoAIP;
