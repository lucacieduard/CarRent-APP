import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import { CarsContext } from "../../context/carsContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Car } from "../../types/Car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminCars.scss";

const AdminCars = () => {
  const navigate = useNavigate();
  const carsContext = useContext(CarsContext);

  return (
    <AdminLayout>
      <div className="adminTableC">
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
              {
                title: "Recomandation",
                field: "recomandation",
                render: (rowData) => (
                  <p>
                    {rowData.recomandation ? (
                      <FontAwesomeIcon icon={faCheck} color="green" />
                    ) : (
                      <FontAwesomeIcon icon={faX} color="red" />
                    )}
                  </p>
                ),
                align: "center",
              },
              {
                title: "Popular",
                field: "popular",
                render: (rowData) => (
                  <p>
                    {rowData.popular ? (
                      <FontAwesomeIcon icon={faCheck} color="green" />
                    ) : (
                      <FontAwesomeIcon icon={faX} color="red" />
                    )}
                  </p>
                ),
                align: "center",
              },
              {
                title: "Reviews",
                render: (rowData) => <p>{rowData.reviews.length}</p>,
                align: "center",
              },
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
                icon: "preview",
                tooltip: "Preview Car",
                onClick: (_event, rowData) => {
                  if (!Array.isArray(rowData) && rowData.uid) {
                    navigate(`/cars/${rowData.uid}`);
                  }
                },
                position: "row",
              },
              {
                icon: "delete",
                tooltip: "Delete Car",
                onClick: async (_event, rowData) => {
                  if (!Array.isArray(rowData) && rowData.uid) {
                    await deleteDoc(doc(db, "cars", rowData.uid));
                  }
                  carsContext.refresh();
                },
                position: "row",
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              doubleHorizontalScroll: true,
              maxBodyHeight: 450,
              emptyRowsWhenPaging: false,
              columnsButton: true,
              detailPanelColumnAlignment: "left",
              overflowY: "scroll",
            }}
          />
        </ThemeProvider>
      </div>
    </AdminLayout>
  );
};

export default AdminCars;
