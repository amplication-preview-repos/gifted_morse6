import { CustomerServiceRoleWhereInput } from "./CustomerServiceRoleWhereInput";
import { CustomerServiceRoleOrderByInput } from "./CustomerServiceRoleOrderByInput";

export type CustomerServiceRoleFindManyArgs = {
  where?: CustomerServiceRoleWhereInput;
  orderBy?: Array<CustomerServiceRoleOrderByInput>;
  skip?: number;
  take?: number;
};
