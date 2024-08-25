import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerServiceRoleServiceBase } from "./base/customerServiceRole.service.base";

@Injectable()
export class CustomerServiceRoleService extends CustomerServiceRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
