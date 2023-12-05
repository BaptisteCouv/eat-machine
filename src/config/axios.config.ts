import axios from 'axios';

// Configurer l'en-tête 'Access-Control-Allow-Origin' pour autoriser les requêtes depuis un domaine spécifique
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://localhost:3000/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Vous pouvez également configurer d'autres en-têtes CORS au besoin
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/', // L'URL API
});

export default axiosInstance;