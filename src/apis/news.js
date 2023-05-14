import axios from 'axios';

const fetchNews = async () => {
    let data = await axios.get('http://0.0.0.0:8000/news');
    return data;    
}

let newsAPI = {};
export default newsAPI = { 
    fetchNewss: fetchNews, 
};