import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import { CarsContext } from "../../context/carsContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Car } from "../../types/Car";

const AdminCars = () => {
  const navigate = useNavigate();
  const carsContext = useContext(CarsContext);


  return (
    <AdminLayout>
      <p>Test</p>
      <div style={{ width: "99%", maxHeight: "500px" }}>
        <ThemeProvider theme={createTheme()}>
          <MaterialTable
            columns={[
              {
                title: "Image",
                field: "svg",
                render: (rowData) => <img src={rowData.svg} width={85} />,
              },
              { title: "Name", field: "carName" },
              {
                title: "Price",
                field: "price",
                render: (rowData) => <p>${rowData.price}</p>,
              },
              { title: "Car Type", field: "carType" },
            ]}
            data={carsContext.cars as Car[]}
            title="Cars"
            isLoading={carsContext.loading}
            actions={[
              {
                icon: "refresh",
                tooltip: "Refresh Cars",
                onClick: () => carsContext.refresh(),
                position: "toolbar",
              },
              {
                icon: "edit",
                tooltip: "Edit Car",
                onClick: (_event, rowData) => {
                  if (!Array.isArray(rowData) && rowData.uid) {
                    navigate(`/admin/add?id=${rowData.uid}`);
                  }
                },
                position: "row",
              },
              {
                icon: "delete",
                tooltip: "Delete Car",
                onClick: () => carsContext.refresh(),
                position: "row",
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              doubleHorizontalScroll: true,
              maxBodyHeight: 500,
              emptyRowsWhenPaging: false,
            }}
          />
        </ThemeProvider>
      </div>
    </AdminLayout>
  );
};

export default AdminCars;
