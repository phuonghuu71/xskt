import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// routes
import usersRoute from './routes/users.js';
import prizesRoute from './routes/prizes.js';
import provincesRoute from './routes/provinces.js';
import lotteriesRoute from './routes/lotteries.js';

// set up dotenv
dotenv.config({
    path: '.env',
});

// use express
const app = express();

// set limit to send img
app.use(
    express.urlencoded({
        extended: true,
        limit: '30mb',
    })
);

// same
app.use(
    express.json({
        extended: true,
        limit: '30mb',
    })
);

// set up cors error fix
app.use(cors());

// Routes
app.use('/users', usersRoute);
app.use('/prizes', prizesRoute);
app.use('/provinces', provincesRoute);
app.use('/lotteries', lotteriesRoute);

// mongodb url
const CONNECTION_URL = process.env.MONGO_URI;

// port
const PORT = process.env.PORT || 5000;

// connect to db
mongoose
    .connect(`${CONNECTION_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server is running on port: ${PORT}`)
        )
    )
    .catch((error) => {
        console.log('DB connection failed.');
        console.log(error.message);
        process.exit(1);
    });
