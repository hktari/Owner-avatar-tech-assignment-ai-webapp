import axios from "axios";
import { Random } from "unsplash-js/dist/methods/photos/types";

console.log(process.env.NEXT_PUBLIC_API_URL);
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const getImages = async (query: string, count?: number): Promise<Random[]> => {
  const response = await axios.get(`/images?query=${query}&count=${count}`);
  return response.data;
};

const analyzeImage = async (imageUrl: string): Promise<string[]> => {
  const response = await axios.post("/analyze", { imageUrl });
  return response.data;
};
export { getImages, analyzeImage };
