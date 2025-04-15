import React from "react";

import RegisterForm from "../components/RegisterForm";
import { Typography } from "antd";
import AuthLayout from "../layouts/Auth/AuthLayout";

const { Text } = Typography;



const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
