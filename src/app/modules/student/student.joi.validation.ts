// create a schema validation using joi
import Joi from "joi";
import {
  TStudent,
  TUserName,
  TGuardian,
  TLocalGuardian,
} from "./student.interface";

const userNameValidationSchema = Joi.object<TUserName>({
  firstName: Joi.string()
    .max(20)
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/, { name: "capitalize", invert: false }),
  middleName: Joi.string().trim().lowercase(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/, { name: "capitalize", invert: false }),
});

const guardianValidationSchema = Joi.object<TGuardian>({
  name: Joi.string().required(),
  age: Joi.number().required(),
  occupation: Joi.string().required(),
  gender: Joi.string().required().valid("male", "female"),
  contactNo: Joi.string().required(),
  relation: Joi.string()
    .valid("father", "mother", "brother", "sister")
    .required(),
});

const localGuardianValidationSchema = Joi.object<TLocalGuardian>({
  name: Joi.string().max(20).required(),
  address: Joi.string().required(),
  contact: Joi.string().required(),
  occupation: Joi.string().required(),
});

const studentValidationSchema = Joi.object<TStudent>({
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
