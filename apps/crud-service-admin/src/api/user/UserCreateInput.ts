import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { VisitCreateNestedManyWithoutUsersInput } from "./VisitCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  idUser?: number | null;
  lastName?: string | null;
  namaUser?: string | null;
  password: string;
  role?: string | null;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
  visits?: VisitCreateNestedManyWithoutUsersInput;
};
