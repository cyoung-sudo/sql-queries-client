import { api, baseURL } from "./configs/axiosConfig";

const ResultAPI = {
  //----- Retrieve results
  getAll: async (query: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        query: query
      },
      url: "/api/results",
      baseURL
    });

    return res;
  }
};

export default ResultAPI;