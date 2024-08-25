import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { VisitListRelationFilter } from "../visit/VisitListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  idUser?: IntNullableFilter;
  lastName?: StringNullableFilter;
  namaUser?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
  visits?: VisitListRelationFilter;
};
