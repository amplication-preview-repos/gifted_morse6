import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  idToko?: StringNullableFilter;
  idTransaksi?: IntNullableFilter;
  idUser?: StringNullableFilter;
  statusOrder?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  tanggalTransaksi?: DateTimeNullableFilter;
  tipePembayaran?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
