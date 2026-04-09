"use client";

import {
  Bell,
  ChevronRight,
  CircleUserRound,
  CreditCard,
  LogOut,
  Sparkles,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@/components/ui";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
}

const menuItems: MenuItem[] = [
  {
    id: "upgrade",
    label: "Upgrade to Pro",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: "account",
    label: "Account",
    icon: <CircleUserRound className="w-4 h-4" />,
  },
  {
    id: "billing",
    label: "Billing",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    id: "logout",
    label: "Log out",
    icon: <LogOut className="w-4 h-4" />,
    danger: false,
  },
];

const TOTAL_CREDITS = 20;
const USED_CREDITS = 15;
const REMAINING_CREDITS = TOTAL_CREDITS - USED_CREDITS;
const PROGRESS_PCT = (USED_CREDITS / TOTAL_CREDITS) * 100;

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const { theme } = useTheme();

  const dark = theme === "dark";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="rounded-full ring-2 ring-transparent ring-offset-2 transition-all focus:outline-none hover:ring-primary/30"
        >
          <Avatar className="size-9 cursor-pointer">
            <AvatarImage src="https://i.pravatar.cc/150?img=12" />
            <AvatarFallback className="text-xs font-semibold bg-sky-100 text-sky-700">
              TB
            </AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "w-70 p-0 rounded-2xl overflow-hidden shadow-xl border",
          dark
            ? "bg-zinc-900 border-zinc-700/60 text-zinc-100"
            : "bg-white border-zinc-200/80 text-zinc-900",
        )}
        align="end"
        sideOffset={10}
      >
        {/* Profile header */}
        <div className="flex gap-3 items-center py-4 px-4">
          <Avatar className="size-10">
            <AvatarImage src="https://i.pravatar.cc/150?img=12" />
            <AvatarFallback className="text-sm font-semibold bg-sky-100 text-sky-700">
              TB
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p
              className={cn(
                "text-sm font-semibold leading-tight",
                dark ? "text-zinc-100" : "text-zinc-900",
              )}
            >
              Toby Belhome
            </p>
            <p
              className={cn(
                "text-xs truncate",
                dark ? "text-zinc-400" : "text-zinc-500",
              )}
            >
              hello@tobybelhome.com
            </p>
          </div>
        </div>

        <Separator className={dark ? "bg-zinc-700/60" : "bg-zinc-100"} />

        {/* Menu items */}
        <div className="py-1.5">
          {menuItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left",
                dark
                  ? "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                  : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900",
              )}
            >
              <span
                className={cn(
                  "shrink-0",
                  dark ? "text-zinc-400" : "text-zinc-500",
                )}
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <Separator className={dark ? "bg-zinc-700/60" : "bg-zinc-100"} />

        {/* Credits section */}
        <div className="p-3">
          <div className="py-3 px-4 rounded-xl shadow-lg bg-white/20">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-1.5 items-center">
                <Zap
                  className={cn(
                    "h-3.5 w-3.5",
                    dark ? "text-zinc-400" : "text-zinc-500",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium",
                    dark ? "text-zinc-200" : "text-zinc-800",
                  )}
                >
                  Credits
                </span>
              </div>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-0.5 text-xs font-medium transition-colors",
                  dark
                    ? "text-zinc-400 hover:text-zinc-200"
                    : "text-zinc-500 hover:text-zinc-800",
                )}
              >
                {REMAINING_CREDITS} left
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Progress bar */}
            <div
              className={cn(
                "h-1.5 w-full rounded-full overflow-hidden",
                dark ? "bg-zinc-700" : "bg-zinc-200",
              )}
            >
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${PROGRESS_PCT}%` }}
              />
            </div>

            <p
              className={cn(
                "text-xs mt-2",
                dark ? "text-zinc-400" : "text-zinc-500",
              )}
            >
              Daily credits used first
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
