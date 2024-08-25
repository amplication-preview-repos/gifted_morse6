import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VisitWhereUniqueInput } from "../visit/VisitWhereUniqueInput";

export type SampleWhereInput = {
  deskripsi?: StringNullableFilter;
  id?: StringFilter;
  idKunjungan?: StringNullableFilter;
  idSample?: IntNullableFilter;
  namaSample?: StringNullableFilter;
  visit?: VisitWhereUniqueInput;
};
