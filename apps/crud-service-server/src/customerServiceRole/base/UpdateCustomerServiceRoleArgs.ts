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
import { CustomerServiceRoleWhereUniqueInput } from "./CustomerServiceRoleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerServiceRoleUpdateInput } from "./CustomerServiceRoleUpdateInput";

@ArgsType()
class UpdateCustomerServiceRoleArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerServiceRoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerServiceRoleWhereUniqueInput)
  @Field(() => CustomerServiceRoleWhereUniqueInput, { nullable: false })
  where!: CustomerServiceRoleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerServiceRoleUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerServiceRoleUpdateInput)
  @Field(() => CustomerServiceRoleUpdateInput, { nullable: false })
  data!: CustomerServiceRoleUpdateInput;
}

export { UpdateCustomerServiceRoleArgs as UpdateCustomerServiceRoleArgs };