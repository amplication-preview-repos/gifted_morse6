import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VISIT_TITLE_FIELD } from "../visit/VisitTitle";

export const SampleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Samples"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
