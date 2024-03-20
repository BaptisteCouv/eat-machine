import axios from "@/config/axios.config";

export async function getAllListCategory() {
  const response = await axios.get("/api/categories");
  return response.data;
}

export async function addOneCategory(category: object) {
  const response = await axios.post("/api/categories", category);
  return response.data;
}

export async function modifyCategory(category: any) {
  const response = await axios.put("/api/categories/" + category._id, {
    category: category,
  });
  return response.data;
}

export async function deleteOneCategory(categoryId: string) {
  const response = await axios.delete("/api/categories/" + categoryId);
  return response.data;
}
