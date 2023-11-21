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
      message: `{VALUE} is not supported`,
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

// student schema
const studentSchema = new Schema<Student>({
  name: userNameSchema,
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    default: "male",
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: `{VALUE} is not supported`,
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
    default: "active",
    enum: {
      values: ["active", "block"],
      message: `{VALUE} is not supported`,
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
