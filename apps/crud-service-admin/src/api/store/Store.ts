import { Transaction } from "../transaction/Transaction";
import { Visit } from "../visit/Visit";

export type Store = {
  createdAt: Date;
  id: string;
  idToko: number | null;
  namaToko: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  visits?: Array<Visit>;
};
