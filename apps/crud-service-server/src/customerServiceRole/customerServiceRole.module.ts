import { Module } from "@nestjs/common";
import { CustomerServiceRoleModuleBase } from "./base/customerServiceRole.module.base";
import { CustomerServiceRoleService } from "./customerServiceRole.service";
import { CustomerServiceRoleController } from "./customerServiceRole.controller";
import { CustomerServiceRoleResolver } from "./customerServiceRole.resolver";

@Module({
  imports: [CustomerServiceRoleModuleBase],
  controllers: [CustomerServiceRoleController],
  providers: [CustomerServiceRoleService, CustomerServiceRoleResolver],
  exports: [CustomerServiceRoleService],
})
export class CustomerServiceRoleModule {}
