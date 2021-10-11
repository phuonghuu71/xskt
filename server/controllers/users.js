import Users from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import e from 'express';

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

// create single user
export const createUser = async (req, res) => {
    try {
        const { username, password, name } = req.body;

        // check input field
        if (!(username && password && name)) {
            return res.status(400).send('All input is required');
        }

        // check exists
        const oldUser = await Users.findOne({ username });

        if (oldUser) {
            return res.status(409).send('Username already exists');
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
        res.status(201).json(newUser);
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
            return res.status(400).send('All input is required');
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
            return res.status(200).json(user);
        } else res.status(400).send('Invalid Credentials');
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
