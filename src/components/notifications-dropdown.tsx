"use client";

import { BellIcon, ClockIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "@/components/ui";
import { cn } from "@/lib/utils";

type NotificationType = "message" | "badge" | "access" | "project" | "order";

type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  read: boolean;
  avatar?: string;
  initials?: string;
  actions?: { label: string; variant: "accept" | "decline" }[];
};

const notifications: Notification[] = [
  {
    id: "d340f49d-534d-4276-b26b-e78a485da91a",
    type: "order",
    title: "Your order is placed",
    description: "Amet minim mollit non deser unt ullamco...",
    time: "2 days ago",
    read: false,
    initials: "OR",
  },
  {
    id: "b448219b-cbe7-44b0-b623-d277b3060e9a",
    type: "badge",
    title: "Congratulations Darlene 🎉",
    description: "Won the monthly best seller badge",
    time: "11 am",
    read: false,
    initials: "DA",
  },
  {
    id: "57070ddb-7ce3-4488-887b-9703532e123c",
    type: "access",
    title: "Joaquina Weisenborn",
    description: "Requesting access permission",
    time: "12 pm",
    read: false,
    initials: "JW",
    actions: [
      { label: "Accept", variant: "accept" },
      { label: "Decline", variant: "decline" },
    ],
  },
  {
    id: "d5c22129-93c5-4ee1-bc18-85571b85709e",
    type: "project",
    title: "Brooklyn Simmons",
    description: "Added you to Top Secret Project...",
    time: "1 pm",
    read: false,
    initials: "BS",
  },
  {
    id: "16439bce-5aa7-4649-b10e-fc1284584e0a",
    type: "access",
    title: "Brooklyn Simmons",
    description: "Requesting access permission",
    time: "4 pm",
    read: false,
    initials: "BS",
    actions: [
      { label: "Accept", variant: "accept" },
      { label: "Decline", variant: "decline" },
    ],
  },
  {
    id: "658a859e-1e5c-4b80-b395-e75f70c12943",
    type: "message",
    title: "Toffee caramels",
    description: "Jelly-o tart gummi bears...",
    time: "4 pm",
    read: false,
    initials: "TC",
  },
  {
    id: "9527e61e-b296-47f4-859c-256ace49d7f2",
    type: "message",
    title: "Miguel Guelff",
    description: "Biscuit powder oat cake donut...",
    time: "7 pm",
    read: false,
    initials: "MG",
  },
  {
    id: "56d85242-86d7-455e-be7f-7b1e4d374592",
    type: "message",
    title: "Mauro Elenbaas",
    description: "Bear claw ice cream lollipop...",
    time: "10 pm",
    read: false,
    initials: "ME",
  },
  {
    id: "75bb8df0-d420-4872-8c5c-a1af6191f049",
    type: "message",
    title: "Bridgett Omohundro",
    description: "Gummies gummi bears I love candy icing...",
    time: "10 pm",
    read: false,
    initials: "BO",
  },
  {
    id: "a2f353aa-de53-4752-87d1-ca3bdd60d532",
    type: "message",
    title: "Zenia Jacobs",
    description: "Cake pie jelly jelly beans. Marzipan lemon...",
    time: "11 pm",
    read: false,
    initials: "ZJ",
  },
];

const avatarColorMap: Record<string, string> = {
  OR: "bg-orange-100 text-orange-700",
  DA: "bg-pink-100 text-pink-700",
  JW: "bg-violet-100 text-violet-700",
  BS: "bg-sky-100 text-sky-700",
  TC: "bg-amber-100 text-amber-700",
  MG: "bg-teal-100 text-teal-700",
  ME: "bg-green-100 text-green-700",
  BO: "bg-rose-100 text-rose-700",
  ZJ: "bg-indigo-100 text-indigo-700",
};

export function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 h-[1.2rem] w-[1.2rem]" />
          <MoonIcon className="absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="dark:hover:text-gray-300"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:hover:text-gray-300"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:hover:text-gray-300"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NotificationItem({
  notification,
  onAction,
}: {
  notification: Notification;
  onAction?: (id: string, action: "accept" | "decline") => void;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer relative",
        !notification.read && "bg-muted/20",
      )}
    >
      <div className="relative shrink-0">
        <Avatar className="size-9">
          {notification.avatar && <AvatarImage src={notification.avatar} />}
          <AvatarFallback
            className={cn(
              "text-xs font-semibold",
              avatarColorMap[notification.initials ?? ""] ??
                "bg-gray-100 text-gray-600",
            )}
          >
            {notification.initials}
          </AvatarFallback>
        </Avatar>
        {!notification.read && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 rounded-full border-2 size-2.5 border-background" />
        )}
      </div>

      <div className="flex-1 space-y-1 min-w-0">
        <p className="text-sm font-medium leading-snug text-foreground">
          {notification.title}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {notification.description}
        </p>

        {notification.actions && (
          <div className="flex gap-2 pt-1">
            {notification.actions.map((action) => (
              <button
                type="button"
                key={action.label}
                onClick={(e) => {
                  e.stopPropagation();
                  onAction?.(notification.id, action.variant);
                }}
                className={cn(
                  "text-xs font-medium px-3 py-1 rounded-full border transition-colors",
                  action.variant === "accept"
                    ? "border-border text-foreground hover:bg-muted"
                    : "bg-red-500 text-white border-red-500 hover:bg-red-600",
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-1 items-center text-[11px] text-muted-foreground/70">
          <ClockIcon className="size-3" />
          <span>{notification.time}</span>
        </div>
      </div>
    </div>
  );
}

export default function NotificationDropdown() {
  const [items, setItems] = useState<Notification[]>(notifications);
  const [open, setOpen] = useState(false);

  const unreadCount = items.filter((n) => !n.read).length;

  const handleAction = (id: string, action: "accept" | "decline") => {
    setItems((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true, actions: undefined } : n,
      ),
    );
  };

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full size-10"
        >
          <BellIcon className="size-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="flex absolute -top-1 -right-1 justify-center items-center p-0 rounded-full size-4 text-[10px]"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="overflow-hidden p-0 bg-white dark:bg-black/80 shadow-lg w-82"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex justify-between items-center py-3 px-4 border-b border-border/60">
          <h3 className="text-sm font-semibold text-foreground">
            Notifications
          </h3>
          <button
            onClick={markAllRead}
            type="button"
            className="text-xs font-medium text-blue-500 transition-colors group"
          >
            <span className="text-blue-500 group-hover:underline">
              View All
            </span>
          </button>
        </div>

        {/* Notification list */}
        <ScrollArea className="h-105">
          <div className="divide-y divide-border/40">
            {items.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onAction={handleAction}
              />
            ))}
          </div>

          {/* View more */}
          <div className="py-3 px-4 border-t border-border/60">
            <button
              type="button"
              className="flex gap-1 justify-end items-center w-full text-xs font-medium text-right hover:underline text-primary"
            >
              View more
              <span className="text-sm">→</span>
            </button>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
