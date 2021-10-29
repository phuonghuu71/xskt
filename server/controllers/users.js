import Users from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import express from 'express';

// get user list
export const getUsers = async (req, res) => {
    try {
        const getUsers = await Users.find();
        res.status(200).json(getUsers);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// login auth
export const loginAuth = async(req, res) => {
    try {
      return res.status(200).json({
          message_auth: 'Welcome',
      });  
    }
    catch (error) {
        res.status(404).json({
            message_auth: error.message,
        });
    }
}

// create single user
export const createUser = async (req, res) => {
    try {
        const { username, password, name } = req.body;

        // check input field
        // if (!(username && password && name)) {
        //     return res.status(200).json({
        //         message: 'All input is required',
        //     });
        // }

        // check exists
        const oldUser = await Users.findOne({ username });

        if (oldUser) {
            return res.status(200).json({
                message: 'Username already exists',
            });
        }

        // encrypt pwd
        const encryptedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = await Users.create({
            username,
            password: encryptedPassword,
            name,
        });

        // create token
        const userToken = jwt.sign(
            {
                user_id: newUser._id,
                username,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h',
            }
        );

        // save user token
        newUser.token = userToken;

        // return user
        res.status(200).json({
            user: newUser,
            message: 'Register Successfully',
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// login
export const loginUser = async (req, res) => {
    try {
        // get info
        const { username, password } = req.body;

        // valid
        if (!(username && password)) {
            return res.status(200).send({
                message: 'all input is required',
            });
        }

        // find exist account
        const user = await Users.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // create token
            const token = jwt.sign(
                {
                    user_id: user._id,
                    username,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );

            // save user
            user.token = token;

            // success message
            console.log('Login successfully');

            // user info
            return res.status(200).json({
                user: user,
                message: 'login successfully',
            });
        } else
            res.status(200).json({
                message: 'invalid credential',
            });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
