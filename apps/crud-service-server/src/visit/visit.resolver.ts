import * as graphql from "@nestjs/graphql";
import { VisitResolverBase } from "./base/visit.resolver.base";
import { Visit } from "./base/Visit";
import { VisitService } from "./visit.service";

@graphql.Resolver(() => Visit)
export class VisitResolver extends VisitResolverBase {
  constructor(protected readonly service: VisitService) {
    super(service);
  }
}
