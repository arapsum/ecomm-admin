import { AppSidebar } from "@/components/app-sidebar";
import {
  DashboardHeader,
  DashboardTables,
  RevenueOrderSection,
  SalesCharts,
} from "@/components/dashboard";
import StatCards from "@/components/dashboard/stat-cards";
import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="py-4 px-2 bg-gray-100 md:px-4 lg:px-6 dark:bg-slate-800">
        <main className="flex-1 rounded-xl shadow-md bg-background">
          <Header />
          <main className="flex flex-col flex-1 gap-4 p-4 pt-2 pb-4">
            <DashboardHeader />
            <StatCards />
            <RevenueOrderSection />
            <SalesCharts />
            <DashboardTables />
          </main>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
