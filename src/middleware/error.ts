import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/erroHelper";

export const errorMiddleware = (error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction)=>{
    const message = error.statusCode ? error.message : 'Internal Server Error';
    const statusCode = error.statusCode ?? 500
    res.status(statusCode).json({message: message})
}