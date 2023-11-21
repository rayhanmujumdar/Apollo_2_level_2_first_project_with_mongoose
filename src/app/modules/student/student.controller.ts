/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import {
  createStudentService,
  getAllStudentsService,
  getSingleStudentService,
} from "./student.service";

// create a new student
export const createStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const studentInfo = req.body;
    const result = await createStudentService(studentInfo);
    res.status(201).json({
      success: true,
      message: "New Student was created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

// get all student
export const getAllStudentsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getAllStudentsService();
    res.status(200).json({
      success: true,
      message: "All students information get successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get single student data
export const getSingleStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await getSingleStudentService(id);
    res.status(200).json({
      success: true,
      message: "Single student data get successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
