import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "idToko";

export const TransactionTitle = (record: TTransaction): string => {
  return record.idToko?.toString() || String(record.id);
};
