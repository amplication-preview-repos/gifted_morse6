import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { VisitUpdateManyWithoutUsersInput } from "./VisitUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  idUser?: number | null;
  lastName?: string | null;
  namaUser?: string | null;
  password?: string;
  role?: string | null;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
  visits?: VisitUpdateManyWithoutUsersInput;
};
