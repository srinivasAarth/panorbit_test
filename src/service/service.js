import { api as http } from "./api";
const service = {
  getDetails: () => http.get("users.json"), // at present we have only one get service, imagin if we have 25 services in application level, this configuration makes so easy to maintain future purpose
};
export const { getDetails } = service;
