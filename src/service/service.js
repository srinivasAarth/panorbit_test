import { api as http } from "./api";
const service = {
  getDetails: () => http.get("users.json"),
};
export const { getDetails } = service;
