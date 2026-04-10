"use client";

import {
  type ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
  Column,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Fragment, useId, useMemo, useState } from "react";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import type { AnyProduct } from "@/types/product.types";
import { OptionsSubTable } from "./options-subtable";
import { ProductEditDrawer } from "./product-edit-drawer";
import { getProductColumns } from "./table-columns";
import { SearchIcon } from "lucide-react";

interface ProductsTableProps {
  data: AnyProduct[];
  onSave?: (updated: AnyProduct) => void;
}

export function ProductsTable({ data, onSave }: ProductsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 15,
    pageIndex: 0,
  });
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [editProduct, setEditProduct] = useState<AnyProduct | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleEdit(product: AnyProduct) {
    setEditProduct(product);
    setDrawerOpen(true);
  }

  const columns = getProductColumns(handleEdit);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, expanded, pagination, columnFilters },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    enableSortingRemoval: false,
  });

  return (
    <>
      <section>
        <div className="flex flex-wrap gap-3 py-6 px-2">
          <div className="w-60">
            <Filter column={table.getColumn("name")!} />
          </div>
          <div className="w-36">
            <Filter column={table.getColumn("price")!} />
          </div>

          <div className="w-36">
            <Filter column={table.getColumn("category")!} />
          </div>
          <div className="w-44">
            <Filter column={table.getColumn("stock")!} />
          </div>
        </div>
      </section>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No products found.
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  {/* Main product row */}
                  <TableRow
                    data-state={row.getIsSelected() && "selected"}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Expanded options sub-table */}
                  {row.getIsExpanded() && (
                    <TableRow className="hover:bg-transparent">
                      <TableCell colSpan={columns.length} className="p-0">
                        <OptionsSubTable product={row.original} />
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end items-center py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Edit drawer */}
      <ProductEditDrawer
        product={editProduct}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onSave={onSave}
      />
    </>
  );
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const id = useId();
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};
  const columnHeader =
    typeof column.columnDef.header === "string" ? column.columnDef.header : "";

  const sortedUniqueValues = useMemo(() => {
    if (filterVariant === "range") return [];

    const values = Array.from(column.getFacetedUniqueValues().keys());

    const flattenedValues = values.reduce((acc: string[], curr) => {
      if (Array.isArray(curr)) {
        return [...acc, ...curr];
      }

      return [...acc, curr];
    }, []);

    return Array.from(new Set(flattenedValues)).sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [column.getFacetedUniqueValues(), filterVariant]);

  if (filterVariant === "range") {
    return (
      <div className="*:not-first:mt-2">
        <Label>{columnHeader}</Label>
        <div className="flex">
          <Input
            id={`${id}-range-1`}
            className="flex-1 rounded-r-none [-moz-appearance:textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(e) =>
              column.setFilterValue((old: [number, number]) => [
                e.target.value ? Number(e.target.value) : undefined,
                old?.[1],
              ])
            }
            placeholder="Min"
            type="number"
            aria-label={`${columnHeader} min`}
          />
          <Input
            id={`${id}-range-2`}
            className="-ms-px flex-1 rounded-l-none [-moz-appearance:textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(e) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                e.target.value ? Number(e.target.value) : undefined,
              ])
            }
            placeholder="Max"
            type="number"
            aria-label={`${columnHeader} max`}
          />
        </div>
      </div>
    );
  }

  if (filterVariant === "select") {
    return (
      <div className="*:not-first:mt-2">
        <Label htmlFor={`${id}-select`}>{columnHeader}</Label>
        <Select
          value={columnFilterValue?.toString() ?? "all"}
          onValueChange={(value) => {
            column.setFilterValue(value === "all" ? undefined : value);
          }}
        >
          <SelectTrigger id={`${id}-select`} className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sortedUniqueValues.map((value) => (
              <SelectItem
                className="capitalize"
                key={String(value)}
                value={String(value)}
              >
                {String(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={`${id}-input`}>{columnHeader}</Label>
      <div className="relative">
        <Input
          id={`${id}-input`}
          className="pl-9 peer"
          value={(columnFilterValue ?? "") as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
          placeholder={`Search ${columnHeader.toLowerCase()}`}
          type="text"
        />
        <div className="flex absolute inset-y-0 left-0 justify-center items-center pl-3 pointer-events-none text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
