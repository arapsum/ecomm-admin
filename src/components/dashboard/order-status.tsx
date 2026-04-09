"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  {
    month: "January",
    delivered: 186,
    shipped: 80,
    processing: 110,
    pending: 65,
    cancelled: 15,
  },
  {
    month: "February",
    delivered: 305,
    shipped: 200,
    processing: 175,
    pending: 14,
    cancelled: 10,
  },
  {
    month: "March",
    delivered: 237,
    shipped: 120,
    processing: 123,
    pending: 12,
    cancelled: 25,
  },
  {
    month: "April",
    delivered: 73,
    shipped: 190,
    processing: 21,
    pending: 53,
    cancelled: 13,
  },
  {
    month: "May",
    delivered: 209,
    shipped: 130,
    processing: 23,
    pending: 41,
    cancelled: 7,
  },
  {
    month: "June",
    delivered: 214,
    shipped: 140,
    processing: 155,
    pending: 32,
    cancelled: 19,
  },
];

const chartConfig = {
  delivered: {
    label: "Delivered",
    color: "var(--chart-6)",
  },
  shipped: {
    label: "Shipped",
    color: "var(--chart-7)",
  },
  processing: {
    label: "Processing",
    color: "var(--chart-8)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-9)",
  },
  cancelled: {
    label: "Cancelled",
    color: "var(--chart-10)",
  },
} satisfies ChartConfig;

export function OrderStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="lg:min-h-90 lg:max-h-90"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="delivered"
              stackId="a"
              fill="var(--color-delivered)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="shipped"
              stackId="a"
              fill="var(--color-shipped)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="processing"
              stackId="a"
              fill="var(--color-processing)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="pending"
              stackId="a"
              fill="var(--color-pending)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="cancelled"
              stackId="a"
              fill="var(--color-cancelled)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
