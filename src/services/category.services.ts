import axios from "@/config/axios.config";

export async function getAllListCategory() {
  const response = await axios.get("/api/categories");
  return response.data;
}

export async function addOneCategory(category: object) {
  const response = await axios.post("/api/categories", category);
  return response.data;
}
