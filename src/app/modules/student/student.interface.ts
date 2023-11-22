type BloodType = "A" | "B" | "AB" | "O";
type RhFactor = "+" | "-";
export type BloodGroup = `${BloodType}${RhFactor}`;
export type Guardian = {
  name: string;
  age: number;
  relation: "father" | "mother" | "brother" | "sister";
  occupation: string;
  gender: string;
  contactNo: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contact: string;
  address: string;
};

export type Student = {
  name: UserName;
  email: string;
  age: number;
  gender: "male" | "female";
  contactNo: string;
  dateOfBirth: string;
  emergencyContactNo: string;
  bloodGroup: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: "active" | "block";
};
