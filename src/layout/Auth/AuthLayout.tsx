import React from "react";
import FullPageLayout from "../FullPage/FullPageLayout";
import "./AuthLayout.scss";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg">
      <FullPageLayout>
        <div className="container_w loginContainer">
          <div className="loginImg">
            <img
              src="/login-register.png"
              alt="logo image"
              className="authImage"
            />
          </div>
          {children}
        </div>
      </FullPageLayout>
    </div>
  );
};

export default AuthLayout;
