/** biome-ignore-all lint/performance/noImgElement: prefer it personally */
"use client";

import type { ColumnDef, Row } from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  MoreHorizontalIcon,
  PencilIcon,
} from "lucide-react";
import {
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import type { AnyProduct } from "@/types/product.types";

const GBP = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function PriceSummary({ product }: { product: AnyProduct }) {
  const prices = product.options.map((o) => o.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return (
    <div className="font-medium">
      {min === max
        ? GBP.format(min)
        : `${GBP.format(min)} – ${GBP.format(max)}`}
    </div>
  );
}

function StockSummary({ product }: { product: AnyProduct }) {
  const total = product.options.reduce((s, o) => s + o.quantity, 0);
  const variants = product.options.length;
  if (total === 0) return <Badge variant="destructive">Out of stock</Badge>;
  if (total <= 5)
    return (
      <Badge variant="warning">
        {total} left · {variants}v
      </Badge>
    );
  return (
    <Badge variant="default">
      {total} in stock · {variants}v
    </Badge>
  );
}

export function getProductColumns(
  onEdit: (product: AnyProduct) => void,
): ColumnDef<AnyProduct>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
          }
          onChange={(isSelected) =>
            table.toggleAllPageRowsSelected(!!isSelected)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={(isSelected) => row.toggleSelected(!!isSelected)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "expand",
      header: () => null,
      cell: ({ row }) => (
        <Button
          variant="ghost"
          size="icon"
          className="size-6"
          onClick={() => row.toggleExpanded()}
          aria-label={
            row.getIsExpanded() ? "Collapse variants" : "Expand variants"
          }
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="size-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="size-4 text-muted-foreground" />
          )}
        </Button>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Product",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex gap-3 items-center">
            <figure className="size-9 shrink-0">
              <img
                src={product.images[0].url}
                className="object-contain object-center aspect-5/4 size-full"
                alt={`Product ${product.name}`}
              />
            </figure>
            <div className="flex flex-col">
              <span className="font-medium">{`${product.brand} ${product.name}`}</span>
              <span className="text-xs text-muted-foreground">
                {product.modelNumber}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "brand",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Brand</span>
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <span className="capitalize">{row.getValue("brand")}</span>
      ),
    },
    {
      id: "price",
      header: "Price",
      cell: ({ row }) => <PriceSummary product={row.original} />,
    },
    {
      id: "stock",
      header: "Stock",
      cell: ({ row }) => <StockSummary product={row.original} />,
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Category</span>
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <span className="capitalize">{row.getValue("category")}</span>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex gap-1 items-center">
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => onEdit(product)}
              aria-label="Edit product"
            >
              <PencilIcon className="size-4" />
            </Button>
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
                  onClick={() => navigator.clipboard.writeText(product.id)}
                >
                  Copy product ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onEdit(product)}>
                  Edit product
                </DropdownMenuItem>
                <DropdownMenuItem>View on storefront</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Delete product
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
}
