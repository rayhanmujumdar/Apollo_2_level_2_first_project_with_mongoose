/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
// import validator from "validator";
import {
  TStudent,
  TUserName,
  TGuardian,
  TLocalGuardian,
  StudentModel,
  // StudentMethods,
} from "./student.interface";
import config from "../../config";

// name Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    maxlength: [20, "First name must be less then 20 characters"],
    // trim: true,
    required: [
      true,
      "firstName must required, not other option, you must be can get me your firstName name",
    ],
    // validate: {
    //   validator: function (val: string) {
    //     const firstName = val.charAt(0).toUpperCase() + val.slice(1);
    //     return firstName === val;
    //   },
    //   message: "{VALUE} is not in capitalize format",
    // },
  },

  middleName: {
    type: String,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    trim: true,
    // validate: {
    //   validator: (value: string) => {
    //     return validator.isAlpha(value);
    //   },
    //   message: `Last name must only contain alphabetical characters`,
    // },
    required: true,
  },
});

// guardian schema
const guardianSchema = new Schema<TGuardian>({
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
const localGuardianSchema = new Schema<TLocalGuardian>({
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
const studentSchema = new Schema<TStudent, StudentModel>({
  name: {
    type: userNameSchema,
    required: [true, "name field is required"],
  },
  password: {
    type: String,
    required: [true, "Password must be required"],
    minlength: 6,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Email must be required and email must be unique"],
    // validate: {
    //   validator: (value: string) => {
    //     return validator.isEmail(value);
    //   },
    //   message: `{VALUE} is not valid email`,
    // },
    unique: true,
  },
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
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  isActive: {
    type: String,
    default: "active",
    enum: {
      values: ["active", "block"],
      message: `{VALUE} is not supported`,
    },
  },
  profileImg: String,
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});

// mongoose middleware function
studentSchema.pre("save", async function () {
  const user: TStudent = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.hash_salf_round),
  );
});

// create a custom statics method
studentSchema.statics.isUserExists = async function (email: string) {
  const existedUser = await this.findOne({ email });
  return existedUser;
};

// create a custom instance method
// studentSchema.methods.isUserExists = async function (email: string) {
//   const isExistedUser = await Student.findOne({ email });
//   return isExistedUser;
// };

const Student = model<TStudent, StudentModel>("Student", studentSchema);

export default Student;
