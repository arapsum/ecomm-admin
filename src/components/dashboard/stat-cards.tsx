/** biome-ignore-all lint/suspicious/noArrayIndexKey: will fix later */
import { TrendingDown, TrendingUp } from "lucide-react";
import { Button, Card, CardContent, CardFooter } from "@/components/ui";

const stats = [
  {
    label: "Monthly recurring revenue",
    value: "$34.1K",
    change: "+6.1%",
    positive: true,
  },
  { label: "Users", value: "500.1K", change: "+19.2%", positive: true },
  { label: "User growth", value: "11.3%", change: "-1.2%", positive: false },
];

type StatCardProps = {
  title: string;
  value: string | number;
  growth: string;
};

function StatCard({ title, value, growth }: StatCardProps) {
  const positive = !growth.startsWith("-");

  return (
    <Card className="flex flex-col flex-1 justify-between border border-black/40">
      <CardContent className="px-6 pt-6 pb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium leading-snug text-gray-500 dark:text-gray-400 line-clamp-1">
            {title}
          </span>
          <span
            className={`flex items-center gap-0.5 text-sm font-semibold ${
              positive ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {positive ? (
              <TrendingUp className="size-3.5" />
            ) : (
              <TrendingDown className="size-3.5" />
            )}
            {growth}
          </span>
        </div>
        <p className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-50">
          {value}
        </p>
      </CardContent>

      <CardFooter className="py-4 px-6 border-t border-black/30 bg-card">
        <button
          type="button"
          className="flex gap-1 items-center text-sm font-medium text-blue-500 transition-colors dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          View more <span aria-hidden>→</span>
        </button>
      </CardFooter>
    </Card>
  );
}

const dots = [
  { top: "10%", left: "6%", color: "#4285F4", size: 5 },
  { top: "18%", left: "88%", color: "#EA4335", size: 4 },
  { top: "70%", left: "92%", color: "#FBBC05", size: 5 },
  { top: "80%", left: "4%", color: "#34A853", size: 4 },
  { top: "42%", left: "95%", color: "#4285F4", size: 3 },
  { top: "55%", left: "2%", color: "#EA4335", size: 3 },
  { top: "28%", left: "50%", color: "#FBBC05", size: 3 },
  { top: "88%", left: "55%", color: "#34A853", size: 4 },
  { top: "8%", left: "72%", color: "#9C27B0", size: 3 },
  { top: "90%", left: "30%", color: "#4285F4", size: 3 },
];

function BestSellerCard({
  name,
  subtitle,
  amount,
  percentChange,
}: {
  name: string;
  subtitle: string;
  amount: string;
  percentChange: string;
}) {
  const isPositive = !percentChange.startsWith("-");

  return (
    <Card className="flex overflow-hidden relative flex-col justify-between rounded-2xl border border-blue-500/40 bg-accent flex-[1.4]">
      {/* Confetti dots */}
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
        />
      ))}

      <CardContent className="z-10 px-6 pt-6 pb-4">
        <p className="mb-0.5 text-lg font-bold text-slate-50 dark:text-slate-900">
          {name}! 🎉
        </p>
        <p className="mb-4 text-sm text-slate-300 dark:text-slate-600">
          {subtitle}
        </p>

        <div className="flex gap-4 justify-between items-end">
          <div>
            <p className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-50">
              {amount}
            </p>
            <p className="flex gap-1 items-center mt-1 text-xs font-medium text-emerald-500 dark:text-emerald-400">
              {isPositive ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="text-red-500 size-3" />
              )}
              <span
                className={
                  isPositive
                    ? "text-emerald-200 dark:text-emerald-700"
                    : "text-red-200 dark:text-red-700"
                }
              >
                {percentChange}
              </span>
              <span className="font-normal text-slate-200 dark:text-slate-700">
                from last month
              </span>
            </p>
          </div>

          <Button variant="outline" size="sm">
            View Sales
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function StatCards() {
  return (
    <section className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3">
      <BestSellerCard
        name="Dell XPS 14"
        subtitle="Best selling product of the month"
        amount="£13650"
        percentChange="+12.5%"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:col-span-2">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            title={stat.label}
            value={stat.value}
            growth={stat.change}
          />
        ))}
      </div>
    </section>
  );
}

export default StatCards;
