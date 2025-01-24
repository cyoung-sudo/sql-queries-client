import { api, baseURL } from "./configs/axiosConfig";

const ClockinAPI = {
  //----- Retrieve clockins
  getAll: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/clockins",
      baseURL
    });

    return res;
  },
  
  //----- Add clockins
  create: async (eID: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        eID
      },
      url: "/api/clockins",
      baseURL
    });

    return res;
  }
};

export default ClockinAPI;