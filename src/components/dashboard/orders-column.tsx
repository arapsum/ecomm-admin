"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontalIcon } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import type { Order, OrderStatus } from "@/types/order";

const statusStyles: Record<OrderStatus, { label: string; className: string }> =
  {
    pending: {
      label: "Pending",
      className:
        "bg-yellow-200/20 border-yellow-500/40 border text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
    processing: {
      label: "Processing",
      className:
        "bg-blue-200/20 border border-blue-500/40 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    shipped: {
      label: "Shipped",
      className:
        "bg-purple-200/20 border border-purple-500/40 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    delivered: {
      label: "Delivered",
      className:
        "bg-green-200/20 border border-green-500/40 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    cancelled: {
      label: "Cancelled",
      className:
        "bg-rose-200/20 border border-rose-500/40 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    },
  };

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "customer",
    accessorFn: (row) => row.customer.name,
    header: "Customer",
    cell: ({ row }) => {
      const { name, email, avatar } = row.original.customer;
      return (
        <div className="flex gap-3 items-center">
          <img
            src={avatar}
            alt={name}
            className="object-cover rounded-full size-8 bg-muted shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate">{name}</span>
            <span className="text-xs text-muted-foreground truncate">
              {email}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <span className="text-sm">{row.getValue("product")}</span>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Date</span>
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return (
        <span className="text-sm text-muted-foreground">
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Amount</span>
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as OrderStatus;
      const { label, className } = statusStyles[status];
      return (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
        >
          {label}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 size-8">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
