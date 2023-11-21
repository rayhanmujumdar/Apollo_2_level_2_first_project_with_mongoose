import { Student } from "./student.interface";
import StudentModel from "./student.model";

// create a new student service
export const createStudentService = (studentData: Student) => {
  const student = new StudentModel(studentData);
  return student.save();
};

// get all student service
export const getAllStudentsService = () => {
  return StudentModel.find({});
};

// get single student service
export const getSingleStudentService = (id: string) => {
  return StudentModel.findById(id);
};
