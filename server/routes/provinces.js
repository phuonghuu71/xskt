import express from 'express';

import { getProvinces, createProvince, deleteProvince, updateProvince } from '../controllers/Provinces.js';

const provincesRoute = express.Router();

// Provinces
provincesRoute.get('/', getProvinces);
provincesRoute.post('/', createProvince);
provincesRoute.post('/:id', updateProvince);
provincesRoute.delete('/:id', deleteProvince);

export default provincesRoute;
