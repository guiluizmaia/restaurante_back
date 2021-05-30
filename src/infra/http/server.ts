import cors from 'cors';

import 'reflect-metadata';
import '../container/index';
import '../typeorm';
import '../container/index';
import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import routes from './routes';
import AppError from '../errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        console.log(err)
        return response.status(err.status_code).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        messsage: `Internal server error: ${err.message}`
    })
})

app.listen(3333, () => {
    console.log('Server is running');
});
