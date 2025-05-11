import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Fragment>{children}</Fragment>;
};

export default DashboardLayout;
