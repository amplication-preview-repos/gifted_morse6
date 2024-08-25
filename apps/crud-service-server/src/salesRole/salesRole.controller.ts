import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesRoleService } from "./salesRole.service";
import { SalesRoleControllerBase } from "./base/salesRole.controller.base";

@swagger.ApiTags("salesRoles")
@common.Controller("salesRoles")
export class SalesRoleController extends SalesRoleControllerBase {
  constructor(protected readonly service: SalesRoleService) {
    super(service);
  }
}
