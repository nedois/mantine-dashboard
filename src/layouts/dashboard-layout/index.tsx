import { Outlet } from "@tanstack/react-router";

import { DashboardAppShell } from "#/components";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";

export default function DashboardLayout() {
  return (
    <DashboardAppShell header={DashboardHeader} sidebar={DashboardSidebar}>
      <Outlet />
    </DashboardAppShell>
  );
}
