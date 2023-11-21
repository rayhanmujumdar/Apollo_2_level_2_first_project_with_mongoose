/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const err: any = new Error("Response not found");
  err.status = 500;
  next(err);
};

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  if (err && err?.status) {
    res.status(err.status).json({
      code: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      code: 500,
      message: "Something was wrong",
    });
  }
};
