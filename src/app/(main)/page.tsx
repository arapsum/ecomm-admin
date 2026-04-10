import {
  DashboardHeader,
  DashboardTables,
  RevenueOrderSection,
  SalesCharts,
} from "@/components/dashboard";
import StatCards from "@/components/dashboard/stat-cards";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <DashboardHeader />
      <StatCards />
      <RevenueOrderSection />
      <SalesCharts />
      <DashboardTables />
    </main>
  );
}
