import * as graphql from "@nestjs/graphql";
import { SampleResolverBase } from "./base/sample.resolver.base";
import { Sample } from "./base/Sample";
import { SampleService } from "./sample.service";

@graphql.Resolver(() => Sample)
export class SampleResolver extends SampleResolverBase {
  constructor(protected readonly service: SampleService) {
    super(service);
  }
}
