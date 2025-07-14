import axios from 'axios';

const API_URL = 'https://autores-yopl.onrender.com/api/autores';

export const getAutores = () => axios.get(API_URL);
