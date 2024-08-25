import { SalesRoleWhereInput } from "./SalesRoleWhereInput";
import { SalesRoleOrderByInput } from "./SalesRoleOrderByInput";

export type SalesRoleFindManyArgs = {
  where?: SalesRoleWhereInput;
  orderBy?: Array<SalesRoleOrderByInput>;
  skip?: number;
  take?: number;
};
