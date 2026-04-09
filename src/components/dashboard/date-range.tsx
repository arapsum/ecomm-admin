"use client";

import {
  endOfMonth,
  endOfMonth as endOfPrevMonth,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
} from "date-fns";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import {
  Calendar,
  Field,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

function getPresets(): { label: string; range: DateRange }[] {
  const now = new Date();
  const today = startOfDay(now);
  const yesterday = subDays(today, 1);
  const prevMonthStart = startOfMonth(subMonths(today, 1));

  return [
    { label: "Today", range: { from: today, to: today } },
    { label: "Yesterday", range: { from: yesterday, to: yesterday } },
    { label: "This Week", range: { from: startOfWeek(today), to: today } },
    { label: "Last 7 Days", range: { from: subDays(today, 6), to: today } },
    { label: "Last 28 Days", range: { from: subDays(today, 27), to: today } },
    {
      label: "This Month",
      range: { from: startOfMonth(today), to: endOfMonth(today) },
    },
    {
      label: "Last Month",
      range: { from: prevMonthStart, to: endOfPrevMonth(prevMonthStart) },
    },
    {
      label: "This Year",
      range: { from: startOfYear(today), to: endOfYear(today) },
    },
  ];
}

export function RangeDatePicker({
  date,
  setDate,
  children,
}: {
  date?: DateRange;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
  children: ReactNode;
}) {
  const presets = getPresets();

  /** Label of the currently active preset (if any) */
  const [activePreset, setActivePreset] = useState<string | null>("Today");

  function applyPreset(preset: { label: string; range: DateRange }) {
    setActivePreset(preset.label);
    setDate(preset.range);
  }

  function handleCalendarSelect(range: DateRange | undefined) {
    setActivePreset(null);
    setDate(range);
  }

  return (
    <Field className="w-auto lg:w-60">
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>

        <PopoverContent
          className={cn(
            "p-0 w-auto",
            "flex flex-row",
            "rounded-2xl shadow-xl border border-border/60",
            "overflow-hidden",
          )}
          align="start"
          sideOffset={8}
        >
          <section className="flex flex-col py-2 border-r border-border/50 bg-background lg:min-w-37">
            {presets.map((preset) => (
              <button
                type="button"
                key={preset.label}
                onClick={() => applyPreset(preset)}
                className={cn(
                  "text-left text-sm px-4 py-2 transition-colors",
                  "hover:bg-muted/60 focus-visible:outline-none focus-visible:bg-muted/60",
                  activePreset === preset.label
                    ? "font-semibold text-foreground bg-muted/40"
                    : "font-normal text-muted-foreground",
                )}
              >
                {preset.label}
              </button>
            ))}
          </section>

          <section className="p-3 bg-background">
            <Calendar
              mode="range"
              defaultMonth={date?.to ?? new Date()}
              selected={date}
              onSelect={handleCalendarSelect}
              numberOfMonths={1}
            />
          </section>
        </PopoverContent>
      </Popover>
    </Field>
  );
}
