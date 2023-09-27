import React from "react";
import "./AdminLayout.scss";
import FullPageLayout from "../FullPage/FullPageLayout";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullPageLayout>
      <div className="container_w adminContainer">
        <div className="sidevarAdmin">sidebar </div>

        <div>{children}</div>
      </div>
    </FullPageLayout>
  );
};

export default AdminLayout;
