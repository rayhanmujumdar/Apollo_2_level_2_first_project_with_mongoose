/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
// import studentValidationSchema from "./student.joi.validation";
import studentValidationSchema from "./student.zod.validation";
import {
  createStudentService,
  getAllStudentsService,
  getSingleStudentService,
  deleteStudentDocsService,
} from "./student.service";
import customError from "../../lib/error";

// create a new student
export const createStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const studentInfo = req.body;
    // const value = await studentValidationSchema.validateAsync(studentInfo);
    const zodSchemaValue = studentValidationSchema
      .required({ profileImg: undefined })
      .parse(studentInfo);
    const result = await createStudentService(zodSchemaValue);
    res.status(201).json({
      success: true,
      message: "New Student was created successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

// get all student
export const getAllStudentsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
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
): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await getSingleStudentService(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Single student data get successfully",
        data: result,
      });
    } else {
      throw customError(404, "single student doc not found");
    }
  } catch (err) {
    next(err);
  }
};

// delete student controller
export const deleteStudentDocsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await deleteStudentDocsService(id);
    res.status(201).json({
      success: true,
      message: "student docs deleted successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
