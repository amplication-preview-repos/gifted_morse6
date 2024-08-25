import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "namaToko";

export const StoreTitle = (record: TStore): string => {
  return record.namaToko?.toString() || String(record.id);
};
