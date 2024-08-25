import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { VisitListRelationFilter } from "../visit/VisitListRelationFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  idToko?: IntNullableFilter;
  namaToko?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  visits?: VisitListRelationFilter;
};
