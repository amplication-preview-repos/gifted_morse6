import { TransactionUpdateManyWithoutStoresInput } from "./TransactionUpdateManyWithoutStoresInput";
import { VisitUpdateManyWithoutStoresInput } from "./VisitUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  idToko?: number | null;
  namaToko?: string | null;
  transactions?: TransactionUpdateManyWithoutStoresInput;
  visits?: VisitUpdateManyWithoutStoresInput;
};
