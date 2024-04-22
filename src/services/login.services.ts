import axios from "@/config/axios.config";

export async function loginToken(params: any) {
  const response = await axios.post("/api/auth/login", params);
  return response.data;
}

export async function signUp(params: any) {
  const response = await axios.post("/api/auth/signup", params);
  return response.data;
}
