import axios from "axios";
import { Random } from "unsplash-js/dist/methods/photos/types";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export interface APIErrorPayload {
  error: string;
}

const getImages = async (query: string, count?: number): Promise<Random[]> => {
  const response = await axios.get(`/images?query=${query}&count=${count}`);
  return response.data;
};

const analyzeImage = async (imageUrl: string): Promise<string[]> => {
  const response = await axios.post("/analyze", { imageUrl });
  return response.data.tags;
};
export { getImages, analyzeImage };
