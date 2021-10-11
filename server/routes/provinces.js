import express from 'express';

import { getProvinces, createProvince, getProvincesCount, deleteProvince, updateProvince } from '../controllers/Provinces.js';

const provincesRoute = express.Router();

// Provinces
provincesRoute.get('/', getProvinces);
provincesRoute.get('/count', getProvincesCount);
provincesRoute.post('/', createProvince);
provincesRoute.post('/:id', updateProvince);
provincesRoute.delete('/:id', deleteProvince);

export default provincesRoute;
