import { Router } from "express";
import {
  createStudentController,
  getAllStudentsController,
  getSingleStudentController,
} from "./student.controller";

const route = Router();

// this api hit to create a new student.
route.post("/create-student", createStudentController);
// this api hit to get all students
route.get("/", getAllStudentsController);

// this api hit to get a single student
route.get("/:id", getSingleStudentController);
export default route;
