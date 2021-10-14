import express from 'express';
import mongoose from 'mongoose';
import Provinces from '../models/provinces.js';

// get Province list
export const getProvinces = async (req, res) => {
    const { _page } = req.query;
    const _limit = 5;

    try {
        if (!_page) {
            _page = 1;
        }
        if (_page == 0) {
            const getProvinces = await Provinces.find();
            res.status(200).json({
                data: getProvinces,
            });
        } else {
            const startIndex = (_page - 1) * _limit;
            const total = await Provinces.countDocuments({});

            const getProvinces = await Provinces.find()
                .limit(_limit)
                .skip(startIndex);
            res.status(200).json({
                data: getProvinces,
                currentPage: Number(_page),
                numberOfPages: Math.ceil(total / _limit),
            });
        }
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// create single Province
export const createProvince = async (req, res) => {
    const Province = req.body;
    const newProvince = new Provinces(Province);
    try {
        await newProvince.save();
        res.status(201).json(newProvince);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// update Province
export const updateProvince = async (req, res) => {
    const { id } = req.params;
    const { code, name } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
    const updatedProvince = { code, name, _id: id };
    await Provinces.findByIdAndUpdate(id, updatedProvince, { new: true });
    res.json(updatedProvince);
};

// delete Province
export const deleteProvince = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
    await Provinces.findByIdAndRemove(id);
    res.json({ message: 'Province deleted successfully' });
};
