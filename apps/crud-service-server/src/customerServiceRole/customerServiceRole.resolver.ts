import * as graphql from "@nestjs/graphql";
import { CustomerServiceRoleResolverBase } from "./base/customerServiceRole.resolver.base";
import { CustomerServiceRole } from "./base/CustomerServiceRole";
import { CustomerServiceRoleService } from "./customerServiceRole.service";

@graphql.Resolver(() => CustomerServiceRole)
export class CustomerServiceRoleResolver extends CustomerServiceRoleResolverBase {
  constructor(protected readonly service: CustomerServiceRoleService) {
    super(service);
  }
}
