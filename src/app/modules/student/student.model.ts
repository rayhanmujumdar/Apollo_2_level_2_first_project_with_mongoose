import { Schema, model } from "mongoose";
import {
  Student,
  UserName,
  Guardian,
  LocalGuardian,
} from "./student.interface";

// name Schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },

  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
});

// guardian schema
const guardianSchema = new Schema<Guardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  relation: {
    type: String,
    enum: {
      values: ["father", "mother", "brother", "sister"],
      message: `{VALUES} is not supported`,
    },
  },
  gender: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

// localGuardian schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  name: userNameSchema,
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUES} is not supported",
    },
    required: true,
  },
  bloodGroup: {
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: `{VALUES} is not supported`,
    },
  },
  contactNo: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  isActive: {
    type: String,
    enum: {
      values: ["active", "block"],
      message: `{Values} is not supported`,
    },
  },
  profileImg: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});

const Student = model("Student", studentSchema);

export default Student;
