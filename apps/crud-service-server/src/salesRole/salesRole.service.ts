import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesRoleServiceBase } from "./base/salesRole.service.base";

@Injectable()
export class SalesRoleService extends SalesRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
