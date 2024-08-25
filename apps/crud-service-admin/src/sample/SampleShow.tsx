import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VISIT_TITLE_FIELD } from "../visit/VisitTitle";

export const SampleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deskripsi" source="deskripsi" />
        <TextField label="ID" source="id" />
        <TextField label="ID_Kunjungan" source="idKunjungan" />
        <TextField label="ID_Sample" source="idSample" />
        <TextField label="Nama_Sample" source="namaSample" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Visit" source="visit.id" reference="Visit">
          <TextField source={VISIT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
