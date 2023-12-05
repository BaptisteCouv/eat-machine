import axios from "@/config/axios.config";

export async function getAllListMeals() {
  const response = await axios.get("/api/meals");
  return response.data;
}
