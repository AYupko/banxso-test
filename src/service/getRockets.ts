import axios from "axios";

const API_URL = 'https://api.spacexdata.com/v4/dragons';

export const getRockets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

