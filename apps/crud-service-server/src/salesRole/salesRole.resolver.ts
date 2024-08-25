import * as graphql from "@nestjs/graphql";
import { SalesRoleResolverBase } from "./base/salesRole.resolver.base";
import { SalesRole } from "./base/SalesRole";
import { SalesRoleService } from "./salesRole.service";

@graphql.Resolver(() => SalesRole)
export class SalesRoleResolver extends SalesRoleResolverBase {
  constructor(protected readonly service: SalesRoleService) {
    super(service);
  }
}
