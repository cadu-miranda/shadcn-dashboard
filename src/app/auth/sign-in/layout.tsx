import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
};

const SignInLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Fragment>{children}</Fragment>;
};

export default SignInLayout;
