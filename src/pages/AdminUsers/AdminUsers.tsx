import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import { createTheme, ThemeProvider } from "@mui/material";
import MaterialTable from "material-table";
import { useContext } from "react";
import { UsersContext } from "../../context/usersContext";
import { User } from "../../types/Auth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminUsers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const AdminUsers = () => {
  const usersContext = useContext(UsersContext);
  console.log(usersContext);

  return (
    <AdminLayout>
      <div className="adminTableC">
        <ThemeProvider theme={createTheme()}>
          <MaterialTable
            columns={[
              {
                title: "Full name",
                render: (rowData) => (
                  <p>
                    {rowData.firstName} {rowData.lastName}
                  </p>
                ),
              },
              {
                title: "Email",
                field: "email",
              },
              {
                title: "Title",
                field: "title",
              },
              {
                title: "Admin",
                render: (rowData) => (
                  <p>
                    {rowData.admin ? (
                      <FontAwesomeIcon icon={faCheck} color="green" />
                    ) : (
                      <FontAwesomeIcon icon={faX} color="red" />
                    )}
                  </p>
                ),
                align: "center",
              },
            ]}
            data={usersContext.users as User[]}
            title="Users"
            isLoading={usersContext.loading}
            actions={[
              {
                icon: "refresh",
                tooltip: "Refresh Cars",
                onClick: () => usersContext.refresh(),
                position: "toolbar",
              },

              {
                icon: "edit",
                tooltip: "Edit User",
                onClick: () => {
                  usersContext.refresh();
                },
              },

              {
                icon: "delete",
                tooltip: "Delete User",
                onClick: async (_event, rowData) => {
                  if (!Array.isArray(rowData) && rowData.uid) {
                    await deleteDoc(doc(db, "users", rowData.uid));
                  }
                  usersContext.refresh();
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

export default AdminUsers;
