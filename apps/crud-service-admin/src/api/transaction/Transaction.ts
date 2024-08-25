import { Store } from "../store/Store";
import { User } from "../user/User";

export type Transaction = {
  createdAt: Date;
  id: string;
  idToko: string | null;
  idTransaksi: number | null;
  idUser: string | null;
  statusOrder: string | null;
  store?: Store | null;
  tanggalTransaksi: Date | null;
  tipePembayaran: string | null;
  updatedAt: Date;
  user?: User | null;
};
