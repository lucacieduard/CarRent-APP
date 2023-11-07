import React from "react";
import FullPageLayout from "../FullPage/FullPageLayout";
import "./AuthLayout.scss";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/containerVariants";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <FullPageLayout>
        <div className="container_w loginContainer">
          <div className="loginImg">
            <img
              src="/login-register.webp"
              alt="logo image"
              className="authImage"
            />
          </div>
          {children}
        </div>
      </FullPageLayout>
    </motion.div>
  );
};

export default AuthLayout;
