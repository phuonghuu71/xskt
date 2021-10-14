import axios from 'axios';

// url province
const url_province = 'http://localhost:5000/provinces';

export const fetchProvinces = (page) => axios.get(`${url_province}?_page=${page}`);

export const createProvince = (newProvince) => axios.post(url_province, newProvince);

export const updateProvince = (id, updatedProvince) =>
    axios.post(`${url_province}/${id}`, updatedProvince);

export const deleteProvince = (id) => axios.delete(`${url_province}/${id}`);

// url lottery
const url_lottery = 'http://localhost:5000/lotteries';

export const fetchLotteries = (province, date) => axios.get(`${url_lottery}?province=${province}&date=${date}`);