import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import "./AdminTransactions.scss";
import { TransactionsContext } from "../../context/transactionsContext";
import { CarsContext } from "../../context/carsContext";
import { UsersContext } from "../../context/usersContext";

const AdminCars = () => {
  const transactionsContext = useContext(TransactionsContext);
  const carsContext = useContext(CarsContext);
  const userContext = useContext(UsersContext);

  return (
    <AdminLayout>
      <div className="adminTableC">
        <ThemeProvider theme={createTheme()}>
          <MaterialTable
            columns={[
              {
                title: "Car Image",
                render: (rowData) => {
                  const car = carsContext.cars.find(
                    (car) => car.uid === rowData.carId
                  );
                  return <img src={car?.svg} width={85} />;
                },
              },
              {
                title: "User",
                render: (rowData) => {
                  const user = userContext.users.find(
                    (user) => user.uid === rowData.userId
                  );
                  return <p>{user?.email}</p>;
                },
              },
              {
                title: "Days",
                field: "days",
              },
              {
                title: "Price",
                field: "price",
              },
              {
                title: "Date",
                field: "date",
              },
              {
                title: "Phone",
                field: "phone",
              },
            ]}
            data={transactionsContext.transactions}
            title="Transactions"
            isLoading={transactionsContext.loading}
            actions={[
              {
                icon: "refresh",
                tooltip: "Refresh Transactions",
                onClick: () => transactionsContext.refresh(),
                position: "toolbar",
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              doubleHorizontalScroll: true,
              maxBodyHeight: 420,
              emptyRowsWhenPaging: false,
              columnsButton: true,
              detailPanelColumnAlignment: "left",
            }}
          />
        </ThemeProvider>
      </div>
    </AdminLayout>
  );
};

export default AdminCars;
