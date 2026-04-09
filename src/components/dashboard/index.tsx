"use client";

import { format, subDays } from "date-fns";
import { CalendarIcon, DownloadIcon } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui";
import { CategoryChartPieDonut } from "./category-pie-chart";
import { RangeDatePicker } from "./date-range";
import { ChartLineOrders } from "./line-chart";
import { OrderStatus } from "./order-status";
import { FinancialPositionBarChart } from "./revenue-chart";
import { SalesByLocation } from "./sales-by-location";

export function DashboardHeader() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  return (
    <section className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold tracking-wide leading-6 md:text-3xl">
        Dashboard
      </h1>

      <div className="flex gap-2 items-center md:gap-4">
        <RangeDatePicker date={date} setDate={setDate}>
          <Button
            variant="outline"
            className="flex gap-2 items-center py-2 px-2.5 font-normal rounded-lg md:w-auto lg:justify-start"
          >
            <CalendarIcon className="size-4" />
            <span className="hidden md:block">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </span>
          </Button>
        </RangeDatePicker>

        <Button
          variant="default"
          className="flex gap-2 items-center py-2 px-2.5 rounded-lg md:px-4"
        >
          <DownloadIcon className="size-4" />
          <span className="hidden text-sm lg:block">Download</span>
        </Button>
      </div>
    </section>
  );
}

export function RevenueOrderSection() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <FinancialPositionBarChart />
      <ChartLineOrders />
    </section>
  );
}

export function SalesCharts() {
  return (
    <section className="grid grid-cols-1 gap-4 w-full lg:grid-cols-12">
      <div className="w-full lg:col-span-4">
        <SalesByLocation />
      </div>

      <div className="lg:col-span-3">
        <CategoryChartPieDonut />
      </div>

      <div className="lg:col-span-5">
        <OrderStatus />
      </div>
    </section>
  );
}

export * from "./date-range";
export * from "./stat-cards";
export * from "./tables";
