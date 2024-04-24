import axios, { AxiosInstance } from "axios";

// Configurer l'en-tête 'Access-Control-Allow-Origin' pour autoriser les requêtes depuis un domaine spécifique
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://localhost:3000/';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// Vous pouvez également configurer d'autres en-têtes CORS au besoin
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";


const token = localStorage.getItem("token");

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "http://localhost:8080/", // L'URL API
  baseURL: 'https://eat-machine-back-prod-b5194754aa44.herokuapp.com/', // L'URL API
  headers: { Authorization: `Bearer ${token}` },
});


export default axiosInstance;
