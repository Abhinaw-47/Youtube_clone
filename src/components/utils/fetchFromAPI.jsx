import { ExposureRounded } from "@mui/icons-material";
import axios from "axios"
const base_url='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key':"40b6a528d0msh0e5f4951eda82ffp1f5cc8jsn625683b4a47f",
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI =async (url)=>{
    const {data} =await axios.get(`${base_url}/${url}`,options);
    return data
  }
