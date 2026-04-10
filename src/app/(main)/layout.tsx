import type React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="py-4 px-2 bg-gray-100 md:px-4 lg:px-6 dark:bg-slate-800">
        <main className="flex-1 rounded-xl shadow-md bg-background">
          <Header />
          <main className="flex-1 p-4 pt-2 pb-4">{children}</main>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
