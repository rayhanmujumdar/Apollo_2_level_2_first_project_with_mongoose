/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model } from "mongoose";

type TBloodType = "A" | "B" | "AB" | "O";
type TRhFactor = "+" | "-";
export type TBloodGroup = `${TBloodType}${TRhFactor}`;
export type TGuardian = {
  name: string;
  age: number;
  relation: "father" | "mother" | "brother" | "sister";
  occupation: string;
  gender: string;
  contactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contact: string;
  address: string;
};

export type TStudent = {
  name: TUserName;
  password: string;
  email: string;
  age: number;
  gender: "male" | "female";
  contactNo: string;
  dateOfBirth: string;
  emergencyContactNo: string;
  bloodGroup: TBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  isActive: "active" | "block";
};

// for this interface model statics methods
export interface StudentModel extends Model<TStudent> {
  isUserExists(email: string) : Promise<TStudent>
}



// for this type model instance methods
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
