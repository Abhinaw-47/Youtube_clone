import { ExposureRounded } from "@mui/icons-material";
import axios from "axios"
const base_url='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI =async (url)=>{
    const {data} =await axios.get(`${base_url}/${url}`,options);
    return data
  }