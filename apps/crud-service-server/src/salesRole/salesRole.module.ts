import { Module } from "@nestjs/common";
import { SalesRoleModuleBase } from "./base/salesRole.module.base";
import { SalesRoleService } from "./salesRole.service";
import { SalesRoleController } from "./salesRole.controller";
import { SalesRoleResolver } from "./salesRole.resolver";

@Module({
  imports: [SalesRoleModuleBase],
  controllers: [SalesRoleController],
  providers: [SalesRoleService, SalesRoleResolver],
  exports: [SalesRoleService],
})
export class SalesRoleModule {}
