import axios from 'axios';

const fetchLogs = async () => {
    let data = await axios.get('http://0.0.0.0:8000/log');
    return data;
}

const createLogs = async (payload) => {
    var bodyFormData = new FormData();
    bodyFormData.append('description', payload.description);
    bodyFormData.append('category', payload.category?.name);
    bodyFormData.append('type', payload.type?.name);
    bodyFormData.append('time_spent', payload.time_spent);

    let data = await axios.post('http://0.0.0.0:8000/log/', bodyFormData);
    return data;
}

const editLogs = async () => {
    let data = await axios.put('http://0.0.0.0:8000/log');
    return data;
}

const fetchCategories = async () => {
    let data = await axios.get('http://0.0.0.0:8000/category/');
    return data;
}

const createCategories = async () => {
    let data = await axios.get('http://0.0.0.0:8000/category');
    return data;
}

const editCategories = async () => {
    let data = await axios.get('http://0.0.0.0:8000/category');
    return data;
}

const fetchTypes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/type/');
    return data;
}

const createTypes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/type');
    return data;
}

const editTypes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/type');
    return data;
}

const fetchNotes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/note');
    return data;
}

const createNotes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/note');
    return data;
}

const editNotes = async () => {
    let data = await axios.get('http://0.0.0.0:8000/note');
    return data;
}

let logsAPI = {};
export default logsAPI = {
    fetchLog: fetchLogs,
    fetchCategory: fetchCategories,
    fetchType: fetchTypes,
    createLog: createLogs,
    editLog: editLogs,
    createCategory: createCategories,
    editCategory: editCategories,
    createType: createTypes,
    editType: editTypes,
    fetchNote: fetchNotes,
    createNote: createNotes,
    editNote: editNotes,
};
