import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { Visit } from "../visit/Visit";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  idUser: number | null;
  lastName: string | null;
  namaUser: string | null;
  role: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
  visits?: Array<Visit>;
};
