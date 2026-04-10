import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import type { ElementType } from "react";
import { Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ElementType;
  title: string;
  value: string | number;
  change: string;
}

function StatCard({ icon: Icon, title, value, change }: StatCardProps) {
  const isNegative = change.startsWith("-");

  return (
    <Card>
      <CardContent className="">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2.5 items-center">
            <div
              className={cn(
                "size-10 rounded-sm flex items-center justify-center shrink-0",
                isNegative
                  ? "bg-red-100 dark:bg-red-900"
                  : "bg-green-100 dark:bg-green-900",
              )}
            >
              <Icon
                className={cn(
                  "size-6",
                  isNegative
                    ? "text-rose-700 dark:text-rose-300"
                    : "text-emerald-700 dark:text-emerald-300",
                )}
              />
            </div>
            <h2 className="text-base leading-tight text-gray-600 dark:text-gray-300">
              {title}
            </h2>
          </div>

          <div className="flex gap-2 justify-between items-end">
            <p className="font-medium tracking-tight leading-none text-[22px]">
              {value}
            </p>

            <span
              className={cn(
                "inline-flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap",
                isNegative
                  ? "bg-red-100 border border-rose-500/40 text-rose-600 dark:text-rose-300 dark:bg-red-950"
                  : "bg-green-100 text-emerald-600 border border-emerald-500/40 dark:bg-green-950 dark:text-emerald-300",
              )}
            >
              {isNegative ? (
                <TrendingDownIcon className="size-3" />
              ) : (
                <TrendingUpIcon className="size-3" />
              )}
              {change.replace(/^[+-]/, "")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatCard;
