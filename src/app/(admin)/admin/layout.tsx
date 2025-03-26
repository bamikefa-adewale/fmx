import React from "react";
import AdminNav from "./__components/AdminNav";
import AdminFooter from "./__components/AdminFooter";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <AdminNav />
      <div className="pt-0">{children}</div>
      <AdminFooter />
    </div>
  );
}
