import { api, baseURL } from "./configs/axiosConfig";

const EmployeeAPI = {
  //----- Retrieve employees
  getAll: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/employees",
      baseURL
    });

    return res;
  },
  
  //----- Add employee
  create: async (eID: string, firstName: string, lastName: string, startDate: string, salary: number, risk: string, remote: boolean) => {
    console.log("api")
    const res = await api.request({
      method: "POST",
      data: {
        eID,
        firstName,
        lastName,
        startDate,
        salary,
        risk,
        remote
      },
      url: "/api/employees",
      baseURL
    });

    return res;
  }
};

export default EmployeeAPI;