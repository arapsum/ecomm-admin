"use client";

import {
  CircleDollarSign,
  CircleUser,
  ClipboardPenIcon,
  PlusIcon,
  ReceiptEuro,
  Users,
} from "lucide-react";
import type { ElementType } from "react";
import { ProductsTable } from "@/components/products/product-table";
import StatCard from "@/components/products/stat-cards";
import { Button } from "@/components/ui";
import products from "@/data/products";

const stats: {
  id: number;
  title: string;
  icon: ElementType;
  value: string | number;
  change: string;
}[] = [
  {
    id: 1,
    title: "Gross Sales",
    value: Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(1989500),
    change: "+14.5%",
    icon: CircleDollarSign,
  },
  {
    id: 2,
    title: "Number of Orders",
    value: "12500",
    change: "+9.5%",
    icon: ClipboardPenIcon,
  },
  {
    id: 3,
    title: "New Customers",
    value: "2500",
    change: "+13.25",
    icon: Users,
  },
  {
    id: 4,
    title: "Refunds",
    value: Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(25000),
    change: "-7.74",
    icon: ReceiptEuro,
  },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide leading-6 md:text-3xl">
          Products
        </h1>

        <a href="#/add">
          <Button type="button" className="flex gap-1 items-center py-3 px-4">
            <PlusIcon className="size-4" />
            <span>Add Product</span>
          </Button>
        </a>
      </section>

      <main className="space-y-10">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </section>

        <section>
          <ProductsTable
            data={products}
            onSave={(updated) => {
              console.log(updated.name);
            }}
          />
        </section>
      </main>
    </main>
  );
}
