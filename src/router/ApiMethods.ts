import axios from "axios";

export const ApiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer",
  },
});

export const Get = (endPoint: string, id?: number | string) => {
  return ApiHandle.get(`${endPoint}/${id ? id : ""}`);
};

export const Post = (endPoint: string, model?: {}) => {
  return ApiHandle.post(`${endPoint}`, model);
};

export const Put = (endPoint: string, model?: {}) => {
  return ApiHandle.put(`${endPoint}`, model);
};

export const Delete = (endPoint: string, id?: number | string) => {
  return ApiHandle.delete(`${endPoint}/${id ? id : ""}`);
};
