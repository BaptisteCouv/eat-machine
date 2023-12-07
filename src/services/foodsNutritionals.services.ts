import axios from "@/config/axios.config";

export async function getAllListFoodsNutritionals() {
  const response = await axios.get("/api/foodsNutritional");
  return response.data;
}

export async function getOneFoodsNutritionalsByFoodBinds(idFoods: any) {
  console.log(idFoods);

  const response = await axios.get("/api/foodsNutritional/one", {
    ids: idFoods,
  });
  return response.data;
}

export async function addOneFoodNutritional(food: object) {
  const response = await axios.post("/api/foodsNutritional", food);
  return response.data;
}
