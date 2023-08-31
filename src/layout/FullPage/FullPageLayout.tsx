import React from "react";
import "./FullPageLayout.scss";

const FullPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default FullPageLayout;
