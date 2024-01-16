import axios from "@/config/axios.config";

export async function getAllFoodsByMeals(idMeal: string) {
  const response = await axios.get("/api/foodBind/" + idMeal);
  return response.data;
}

export async function createOnFoodByMeal(params: any) {
  const response = await axios.post("/api/foodBind/", params);
  return response.data;
}
