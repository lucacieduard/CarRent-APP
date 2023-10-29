import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import { createTheme, ThemeProvider } from "@mui/material";
import MaterialTable from "material-table";
import { useContext, useRef } from "react";
import { UsersContext } from "../../context/usersContext";
import { User } from "../../types/Auth";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminUsers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const AdminUsers = () => {
  const usersContext = useContext(UsersContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const updateUserH = async (uid: string) => {
    const data: {
      firstName?: string;
      lastName?: string;
      title?: string;
      email?: string;
    } = {};
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const title = titleRef.current?.value;
    if (firstName && firstName?.length > 3) {
      data.firstName = firstName;
    }
    if (lastName && lastName?.length > 3) {
      data.lastName = lastName;
    }
    if (title && title?.length > 3) {
      data.title = title;
    }
    if (email && email?.length > 3 && email.includes("@")) {
      data.email = email;
    }

    const ref = doc(db, "users", uid);

    await updateDoc(ref, data);

    usersContext.refresh();
  };

  const setAdmin = async (uid: string, action: boolean) => {
    const ref = doc(db, "users", uid);

    await updateDoc(ref, {
      admin: action,
    });

    usersContext.refresh();
  };
  return (
    <AdminLayout>
      <div className="adminTableC">
        <ThemeProvider theme={createTheme()}>
          <MaterialTable
            style={{ paddingRight: "20px" }}
            columns={[
              {
                title: "Image",
                render: (rowData) => (
                  <img src={rowData.fileURL} className="pImg" />
                ),
              },
              {
                title: "First Name",
                field: "firstName",
              },
              {
                title: "Last Name",
                field: "lastName",
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
            }}
            detailPanel={[
              {
                icon: "edit",
                tooltip: "Edit User",

                render: (rowData) => {
                  return (
                    <div className="updateUserContainer">
                      <div className="fields">
                        <div className="field">
                          <label htmlFor="firstName">
                            New First Name (current : {rowData.firstName})
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            ref={firstNameRef}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="lastName">
                            New Last Name (current : {rowData.lastName})
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastName"
                            ref={lastNameRef}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="email">New email :</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            ref={emailRef}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="title">
                            New Title (current : {rowData.title})
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            ref={titleRef}
                          />
                        </div>
                      </div>
                      <div className="actions">
                        <button
                          className="button"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setAdmin(rowData.uid, rowData.admin ? false : true)
                          }
                        >
                          {rowData.admin ? "Delete Admin" : "Set Admin"}
                        </button>
                        <button
                          className="button"
                          style={{ cursor: "pointer" }}
                          onClick={() => updateUserH(rowData.uid)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  );
                },
              },
            ]}
          />
        </ThemeProvider>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
