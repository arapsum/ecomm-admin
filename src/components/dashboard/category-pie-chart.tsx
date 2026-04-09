"use client";

import { useState } from "react";
import { Pie, PieChart, Sector } from "recharts";
import type { PieSectorShapeProps } from "recharts/types/polar/Pie";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with an active sector";

const chartData = [
  { browser: "laptop", visitors: 275, fill: "var(--color-laptop)" },
  { browser: "phone", visitors: 200, fill: "var(--color-phone)" },
  { browser: "smartwatch", visitors: 187, fill: "var(--color-smartwatch)" },
  { browser: "accessories", visitors: 173, fill: "var(--color-accessories)" },
  { browser: "tablet", visitors: 90, fill: "var(--color-tablet)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  laptop: {
    label: "Laptops",
    color: "var(--chart-1)",
  },
  phone: {
    label: "Phones",
    color: "var(--chart-2)",
  },
  smartwatch: {
    label: "Smartwatches",
    color: "var(--chart-3)",
  },
  accessories: {
    label: "Accessories",
    color: "var(--chart-4)",
  },
  tablet: {
    label: "Tablets",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function CategoryChartPieDonut() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sales By Category</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square lg:max-h-90 lg:min-h-90"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              shape={({
                index,
                outerRadius = 0,
                ...props
              }: PieSectorShapeProps) =>
                index === activeIndex ? (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                ) : (
                  <Sector {...props} outerRadius={outerRadius} />
                )
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
