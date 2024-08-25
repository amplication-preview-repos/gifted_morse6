import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  idToko?: SortOrder;
  idTransaksi?: SortOrder;
  idUser?: SortOrder;
  statusOrder?: SortOrder;
  storeId?: SortOrder;
  tanggalTransaksi?: SortOrder;
  tipePembayaran?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
