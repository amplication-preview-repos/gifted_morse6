import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerServiceRoleService } from "./customerServiceRole.service";
import { CustomerServiceRoleControllerBase } from "./base/customerServiceRole.controller.base";

@swagger.ApiTags("customerServiceRoles")
@common.Controller("customerServiceRoles")
export class CustomerServiceRoleController extends CustomerServiceRoleControllerBase {
  constructor(protected readonly service: CustomerServiceRoleService) {
    super(service);
  }
}
