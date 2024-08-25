import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const SalesRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="changeOrderStatus" source="changeOrderStatus" />
      </SimpleForm>
    </Create>
  );
};
