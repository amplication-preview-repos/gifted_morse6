import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VisitList } from "./visit/VisitList";
import { VisitCreate } from "./visit/VisitCreate";
import { VisitEdit } from "./visit/VisitEdit";
import { VisitShow } from "./visit/VisitShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { SampleList } from "./sample/SampleList";
import { SampleCreate } from "./sample/SampleCreate";
import { SampleEdit } from "./sample/SampleEdit";
import { SampleShow } from "./sample/SampleShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { SalesRoleList } from "./salesRole/SalesRoleList";
import { SalesRoleCreate } from "./salesRole/SalesRoleCreate";
import { SalesRoleEdit } from "./salesRole/SalesRoleEdit";
import { SalesRoleShow } from "./salesRole/SalesRoleShow";
import { CustomerServiceRoleList } from "./customerServiceRole/CustomerServiceRoleList";
import { CustomerServiceRoleCreate } from "./customerServiceRole/CustomerServiceRoleCreate";
import { CustomerServiceRoleEdit } from "./customerServiceRole/CustomerServiceRoleEdit";
import { CustomerServiceRoleShow } from "./customerServiceRole/CustomerServiceRoleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRUDService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Visit"
          list={VisitList}
          edit={VisitEdit}
          create={VisitCreate}
          show={VisitShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Sample"
          list={SampleList}
          edit={SampleEdit}
          create={SampleCreate}
          show={SampleShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="SalesRole"
          list={SalesRoleList}
          edit={SalesRoleEdit}
          create={SalesRoleCreate}
          show={SalesRoleShow}
        />
        <Resource
          name="CustomerServiceRole"
          list={CustomerServiceRoleList}
          edit={CustomerServiceRoleEdit}
          create={CustomerServiceRoleCreate}
          show={CustomerServiceRoleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
