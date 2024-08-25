import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SampleListRelationFilter } from "../sample/SampleListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitWhereInput = {
  id?: StringFilter;
  idKunjungan?: IntNullableFilter;
  idToko?: StringNullableFilter;
  idUser?: StringNullableFilter;
  samples?: SampleListRelationFilter;
  store?: StoreWhereUniqueInput;
  tanggalKunjungan?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  waktuMulai?: DateTimeNullableFilter;
  waktuSelesai?: DateTimeNullableFilter;
};
