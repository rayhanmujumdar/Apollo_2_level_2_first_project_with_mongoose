import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string({ required_error: "Firstname must be required" })
    .max(20, { message: "firstname must be less then 20 characters" })
    .trim()
    .refine((val) => /^[A-Z][a-z]*$/.test(val), {
      message: `firstName must be capitalize`,
    }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string({ required_error: "lastName must be required" })
    .trim()
    .refine((val) => /^[A-Z][a-z]*$/.test(val), {
      message: `firstName must be capitalize`,
    }),
});

const guardianValidationSchema = z.object({
  name: z.string({ required_error: "name must be required" }),
  age: z.number({ required_error: "age must be required" }),
  occupation: z.string({ required_error: "occupation must be required" }),
  gender: z.enum(["male", "female"], {
    required_error: "gender must be required",
  }),
  contactNo: z.string({ required_error: "contactNo must be require" }),
  relation: z.enum(["father", "mother", "brother", "sister"]),
});

const localGuardianValidationSchema = z.object({
  name: z.string().max(20, { message: "name must be less then 20 characters" }),
  address: z.string({ required_error: "address must be required" }),
  contact: z.string({ required_error: "contact must be required" }),
  occupation: z.string({ required_error: "occupation must be required" }),
});

const studentValidationSchema = z.object({
  name: userNameValidationSchema.required({ middleName: undefined }),
  password: z
    .string({ required_error: "password must be required" })
    .max(20, { message: "maximum password length is 20 characters required" })
    .min(6, { message: "minimum password length is 6 characters required" }),
  email: z
    .string()
    .refine(
      (val) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val,
        ),
      { message: "invalid email" },
    ),
  age: z.number({ required_error: "age must be required" }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    required_error: "bloodGroup must be required",
  }),
  contactNo: z.string({ required_error: "contactNo must be required" }),
  dateOfBirth: z.string({ required_error: "dateOfBirth must be required" }),
  emergencyContactNo: z.string({
    required_error: "emergencyContactNo must be required",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "gender must be required",
  }),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  isActive: z.enum(["active", "block"]).default("active"),
  permanentAddress: z.string({
    required_error: "permanentAddress must be required",
  }),
  presentAddress: z.string({
    required_error: "presentAddress must be required",
  }),
  profileImg: z.string().optional(),
});

export default studentValidationSchema;
