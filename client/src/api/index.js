import axios from 'axios';

// url province
const url_province = 'http://localhost:5000/provinces';

export const fetchProvinces = (page, token) =>
    axios.get(`${url_province}?_page=${page}&_token=${token}`);

export const createProvince = (newProvince) =>
    axios.post(url_province, newProvince);

export const updateProvince = (id, updatedProvince) =>
    axios.post(`${url_province}/${id}`, updatedProvince);

export const deleteProvince = (id) => axios.delete(`${url_province}/${id}`);

// url lottery
const url_lottery = 'http://localhost:5000/lotteries';

export const fetchLotteries = (province, date, token) =>
    axios.get(`${url_lottery}?province=${province}&date=${date}&_token=${token}`);

export const createLottery = (newLottery) =>
    axios.post(url_lottery, newLottery);

export const updateLottery = (id, updatedLottery) =>
    axios.post(`${url_lottery}/${id}`, updatedLottery);

export const deleteLottery = (_id) => axios.delete(`${url_lottery}/${_id}`);

// url user
const url_user = 'http://localhost:5000/users';

export const loginUser = (user) => axios.post(`${url_user}/login`, user);
export const loginAuth = (user) => axios.get(`${url_user}/welcome?token=${user}`, user);
export const registerUser = (user) => axios.post(url_user, user);