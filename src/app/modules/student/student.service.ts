/* eslint-disable @typescript-eslint/no-explicit-any */
import { TStudent } from "./student.interface";
import Student from "./student.model";

// create a new student service
export const createStudentService = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.email)) {
    const err: any = new Error("Student already exist");
    err.status = 500;
    throw err;
  }
  const student = await Student.create(studentData);
  return student;
};

// get all student service
export const getAllStudentsService = () => {
  return Student.find({});
};

// get single student service
export const getSingleStudentService = (id: string) => {
  return Student.findById(id);
};

export const deleteStudentDocsService = (id: string) => {
  return Student.updateOne({ _id: id }, { isDeleted: true });
};
