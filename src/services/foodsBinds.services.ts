import axios from "@/config/axios.config";

export async function getAllFoodsByMeals(idMeal: string) {
  const response = await axios.get("/api/foodBind/" + idMeal);
  return response.data;
}
