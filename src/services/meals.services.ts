import axios from "@/config/axios.config";

export async function getAllListMeals() {
  const response = await axios.get("/api/meals");
  return response.data;
}

export async function addOneMeal(meal: object) {  
  const response = await axios.post("/api/meals", meal);
  return response.data;
}
