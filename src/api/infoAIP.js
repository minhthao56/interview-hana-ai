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
  // Benefit
  postBenefit: (data) => {
    const url = "/api/benefit";
    return axiosClient.post(url, data);
  },
  getBenefit: () => {
    const url = "/api/benefit";
    return axiosClient.get(url);
  },
  // Feature
  postFeature: (data) => {
    const url = "/api/feature";
    return axiosClient.post(url, data);
  },
  getFeature: () => {
    const url = "/api/feature";
    return axiosClient.get(url);
  },
};

export default infoAIP;
