import { TransactionCreateNestedManyWithoutStoresInput } from "./TransactionCreateNestedManyWithoutStoresInput";
import { VisitCreateNestedManyWithoutStoresInput } from "./VisitCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  idToko?: number | null;
  namaToko?: string | null;
  transactions?: TransactionCreateNestedManyWithoutStoresInput;
  visits?: VisitCreateNestedManyWithoutStoresInput;
};
