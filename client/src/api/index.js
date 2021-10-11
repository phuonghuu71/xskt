import axios from 'axios';

// url
const url = 'http://localhost:5000/provinces';

export const fetchProvinces = (page) => axios.get(`${url}?_page=${page}`);

export const createProvince = (newProvince) => axios.post(url, newProvince);

export const updateProvince = (id, updatedProvince) =>
    axios.post(`${url}/${id}`, updatedProvince);

export const deleteProvince = (id) => axios.delete(`${url}/${id}`);