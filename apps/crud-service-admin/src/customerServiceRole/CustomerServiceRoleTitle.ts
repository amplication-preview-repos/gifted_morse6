import { CustomerServiceRole as TCustomerServiceRole } from "../api/customerServiceRole/CustomerServiceRole";

export const CUSTOMERSERVICEROLE_TITLE_FIELD = "id";

export const CustomerServiceRoleTitle = (
  record: TCustomerServiceRole
): string => {
  return record.id?.toString() || String(record.id);
};
