"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import type { AnyOption, AnyProduct } from "@/types/product.types";
import { attributeColumnsByCategory } from "./attribute-config";

const GBP = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function StockBadge({ qty }: { qty: number }) {
  if (qty === 0) return <Badge variant="destructive">Out of stock</Badge>;
  if (qty <= 5) return <Badge variant="secondary">{qty} left</Badge>;
  return <Badge variant="secondary">{qty} in stock</Badge>;
}

interface OptionsSubTableProps {
  product: AnyProduct;
}

export function OptionsSubTable({ product }: OptionsSubTableProps) {
  const attrMeta = attributeColumnsByCategory[product.category];

  const columns: ColumnDef<AnyOption>[] = [
    {
      accessorKey: "sku",
      header: "SKU",
      cell: ({ row }) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.getValue("sku")}
        </span>
      ),
    },
    ...attrMeta.map<ColumnDef<AnyOption>>(({ key, label }) => ({
      id: key,
      header: label,
      cell: ({ row }) => {
        const val = (row.original.attributes as Record<string, string>)[key];
        return <span className="capitalize">{val ?? "—"}</span>;
      },
    })),
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <span className="font-medium">{GBP.format(row.getValue("price"))}</span>
      ),
    },
    {
      accessorKey: "salePrice",
      header: "Sale Price",
      cell: ({ row }) => {
        const sale = row.getValue<number>("salePrice");
        const regular = row.original.price;
        if (!sale || sale >= regular)
          return <span className="text-muted-foreground">—</span>;
        return (
          <span className="font-medium text-green-600">{GBP.format(sale)}</span>
        );
      },
    },
    {
      accessorKey: "quantity",
      header: "Stock",
      cell: ({ row }) => <StockBadge qty={row.getValue("quantity")} />,
    },
  ];

  const table = useReactTable({
    data: product.options as AnyOption[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="px-4 pt-2 pb-4 border-t bg-muted/30">
      <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
        {product.options.length} variant
        {product.options.length !== 1 ? "s" : ""}
      </p>
      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id} className="bg-muted/50">
                {hg.headers.map((header) => (
                  <TableHead key={header.id} className="py-2 text-xs">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="text-sm">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
