/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SampleWhereUniqueInput } from "./SampleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SampleUpdateInput } from "./SampleUpdateInput";

@ArgsType()
class UpdateSampleArgs {
  @ApiProperty({
    required: true,
    type: () => SampleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SampleWhereUniqueInput)
  @Field(() => SampleWhereUniqueInput, { nullable: false })
  where!: SampleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SampleUpdateInput,
  })
  @ValidateNested()
  @Type(() => SampleUpdateInput)
  @Field(() => SampleUpdateInput, { nullable: false })
  data!: SampleUpdateInput;
}

export { UpdateSampleArgs as UpdateSampleArgs };