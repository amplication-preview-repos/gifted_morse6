import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  idToko?: string | null;
  idTransaksi?: number | null;
  idUser?: string | null;
  statusOrder?: string | null;
  store?: StoreWhereUniqueInput | null;
  tanggalTransaksi?: Date | null;
  tipePembayaran?: string | null;
  user?: UserWhereUniqueInput | null;
};
