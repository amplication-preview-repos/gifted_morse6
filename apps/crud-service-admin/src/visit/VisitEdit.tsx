import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SampleTitle } from "../sample/SampleTitle";
import { StoreTitle } from "../store/StoreTitle";
import { UserTitle } from "../user/UserTitle";

export const VisitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ID_Kunjungan" source="idKunjungan" />
        <TextInput label="ID_Toko" source="idToko" />
        <TextInput label="ID_User" source="idUser" />
        <ReferenceArrayInput
          source="samples"
          reference="Sample"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SampleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <DateTimeInput label="Tanggal_Kunjungan" source="tanggalKunjungan" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Waktu_Mulai" source="waktuMulai" />
        <DateTimeInput label="Waktu_Selesai" source="waktuSelesai" />
      </SimpleForm>
    </Edit>
  );
};
