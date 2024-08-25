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
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VisitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Visits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ID_Kunjungan" source="idKunjungan" />
        <TextField label="ID_Toko" source="idToko" />
        <TextField label="ID_User" source="idUser" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tanggal_Kunjungan" source="tanggalKunjungan" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Waktu_Mulai" source="waktuMulai" />
        <TextField label="Waktu_Selesai" source="waktuSelesai" />
      </Datagrid>
    </List>
  );
};
