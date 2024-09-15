import store from "@/store/index.store";
import router from "@/router/index";

export function getUserIdFromToken(token: any): string | null {
  
  const tokenParts = token.token.split(".");
  if (tokenParts.length !== 3) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(tokenParts[1]));
    return payload.sub;
  } catch (error) {
    console.error("Erreur lors de l'analyse du token JWT :", error);
    return null;
  }
}

export default class AuthService {
  static logout() {
    store.commit("logout");
    router.push("/auth/login");
  }
}
