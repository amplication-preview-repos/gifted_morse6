import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const CustomerServiceRoleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="changeOrderStatus" source="changeOrderStatus" />
      </SimpleForm>
    </Edit>
  );
};
