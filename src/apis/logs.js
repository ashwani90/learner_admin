import axios from 'axios';

const fetchLogs = async () => {
    let data = await axios.get('http://0.0.0.0:8000/log');
    return data;    
}
let logsAPI = {};
export default logsAPI = { fetchLog: fetchLogs };