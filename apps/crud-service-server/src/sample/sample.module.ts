import { Module } from "@nestjs/common";
import { SampleModuleBase } from "./base/sample.module.base";
import { SampleService } from "./sample.service";
import { SampleController } from "./sample.controller";
import { SampleResolver } from "./sample.resolver";

@Module({
  imports: [SampleModuleBase],
  controllers: [SampleController],
  providers: [SampleService, SampleResolver],
  exports: [SampleService],
})
export class SampleModule {}
