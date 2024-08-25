import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VisitTitle } from "../visit/VisitTitle";

export const SampleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Deskripsi" multiline source="deskripsi" />
        <TextInput label="ID_Kunjungan" source="idKunjungan" />
        <NumberInput step={1} label="ID_Sample" source="idSample" />
        <TextInput label="Nama_Sample" source="namaSample" />
        <ReferenceInput source="visit.id" reference="Visit" label="Visit">
          <SelectInput optionText={VisitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
