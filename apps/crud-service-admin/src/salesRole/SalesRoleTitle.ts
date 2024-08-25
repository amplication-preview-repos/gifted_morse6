import { SalesRole as TSalesRole } from "../api/salesRole/SalesRole";

export const SALESROLE_TITLE_FIELD = "id";

export const SalesRoleTitle = (record: TSalesRole): string => {
  return record.id?.toString() || String(record.id);
};
