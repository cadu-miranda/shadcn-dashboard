import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre com sua conta",
};

const SignInLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Fragment>{children}</Fragment>;
};

export default SignInLayout;
