import axios from "axios";
import { Random } from "unsplash-js/dist/methods/photos/types";

axios.defaults.baseURL = process.env.API_URL;

const getImages = async (query: string, count?: number): Promise<Random[]> => {
  const response = await axios.get(`/images?query=${query}&count=${count}`);
  return response.data;
};


export { getImages };
