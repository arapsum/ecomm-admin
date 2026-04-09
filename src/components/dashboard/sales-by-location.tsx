import { Download } from "lucide-react";
import { Progress } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationData {
  country: string;
  change: number;
  percentage: number;
}

const data: LocationData[] = [
  { country: "Nairobi", change: 5.2, percentage: 85 },
  { country: "Thika", change: 7.8, percentage: 80 },
  { country: "Juja", change: -2.1, percentage: 63 },
  { country: "Kahawa", change: 3.4, percentage: 60 },
  { country: "Kasarani", change: 1.2, percentage: 45 },
  { country: "Roysambu", change: 1.0, percentage: 40 },
];

function ChangeBadge({ change }: { change: number }) {
  const isPositive = change >= 0;
  return (
    <Badge
      variant="outline"
      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
        isPositive
          ? "text-emerald-600 bg-emerald-50 border-emerald-200"
          : "text-red-500 bg-red-50 border-red-200"
      }`}
    >
      {isPositive ? `+${change}%` : `${change}%`}
    </Badge>
  );
}

export function SalesByLocation() {
  return (
    <Card className="w-full rounded-2xl border border-card">
      <CardHeader className="px-5 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-semibold tracking-tight">
            Sales by Location
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="flex gap-1.5 items-center px-2.5 h-7 text-xs text-gray-600 rounded-lg dark:text-gray-300"
          >
            <Download className="w-3.5 h-3.5" />
            Export
          </Button>
        </div>
        <p className="mt-0.5 text-xs font-medium text-emerald-600">
          Income in the last 28 days
        </p>
      </CardHeader>

      <CardContent className="px-5 pt-3 pb-5 space-y-4 lg:space-y-5.75">
        {data.map((item) => (
          <div key={item.country} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {item.country}
                </span>
                <ChangeBadge change={item.change} />
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {item.percentage}%
              </span>
            </div>
            <Progress value={item.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
