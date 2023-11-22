// create a schema validation using joi
import Joi from "joi";
import {
  Student,
  UserName,
  Guardian,
  LocalGuardian,
} from "./student.interface";

const userNameValidationSchema = Joi.object<UserName>({
  firstName: Joi.string()
    .max(20)
    .required()
    .trim()
    .pattern(/^[A-Z][a-z]*$/, { name: "capitalize", invert: false })
    .message(
      "First name must be less than 20 characters and in capitalize format",
    ),
  middleName: Joi.string().trim().required().lowercase(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/, { name: "capitalize", invert: false })
    .message("Name must be capitalize"),
});

const guardianValidationSchema = Joi.object<Guardian>({
  name: Joi.string().required(),
  age: Joi.number().required(),
  occupation: Joi.string().required(),
  gender: Joi.string().required().valid("male", "female"),
  contactNo: Joi.string().required(),
  relation: Joi.string()
    .valid("father", "mother", "brother", "sister")
    .required(),
});

const localGuardianValidationSchema = Joi.object<LocalGuardian>({
  name: Joi.string()
    .max(20)
    .required()
    .pattern(/^[A-Z][a-z]*$/, {
      name: "capitalize",
      invert: false,
    })
    .message("Name must be capitalize"),
  address: Joi.string().required(),
  contact: Joi.string().required(),
  occupation: Joi.string().required(),
});

const studentValidationSchema = Joi.object<Student>({
  name: userNameValidationSchema.required(),
  email: Joi.string()
    .required()
    .pattern(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      { name: "email", invert: false },
    ),
  age: Joi.number().required(),
  bloodGroup: Joi.string()
    .required()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"),
  contactNo: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  gender: Joi.string().required().valid("male", "female"),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  isActive: Joi.string().valid("active", "block").default("active").required(),
  permanentAddress: Joi.string().required(),
  presentAddress: Joi.string().required(),
  profileImg: Joi.string().required(),
});

export default studentValidationSchema;
