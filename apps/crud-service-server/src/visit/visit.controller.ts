import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisitService } from "./visit.service";
import { VisitControllerBase } from "./base/visit.controller.base";

@swagger.ApiTags("visits")
@common.Controller("visits")
export class VisitController extends VisitControllerBase {
  constructor(protected readonly service: VisitService) {
    super(service);
  }
}