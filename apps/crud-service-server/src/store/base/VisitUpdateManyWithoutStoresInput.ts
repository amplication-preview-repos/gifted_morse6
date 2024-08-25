/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VisitWhereUniqueInput } from "../../visit/base/VisitWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VisitUpdateManyWithoutStoresInput {
  @Field(() => [VisitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitWhereUniqueInput],
  })
  connect?: Array<VisitWhereUniqueInput>;

  @Field(() => [VisitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitWhereUniqueInput],
  })
  disconnect?: Array<VisitWhereUniqueInput>;

  @Field(() => [VisitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitWhereUniqueInput],
  })
  set?: Array<VisitWhereUniqueInput>;
}

export { VisitUpdateManyWithoutStoresInput as VisitUpdateManyWithoutStoresInput };
