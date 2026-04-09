import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { recentOrders } from "@/types/order";
import { topSellingProducts } from "@/types/product";
import { DataTable } from "../data-table";
import { orderColumns } from "./orders-column";
import { productColumns } from "./products-column";

export function DashboardTables() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <Card className="lg:col-span-7">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={orderColumns}
            data={recentOrders}
            pageSize={8}
            placeholder="Filter orders..."
            filter={["customer", "product", "status"]}
          />
        </CardContent>
      </Card>

      <Card className="lg:col-span-5">
        <CardHeader>
          <CardTitle>Best Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={productColumns}
            data={topSellingProducts}
            pageSize={8}
            placeholder="Filter products..."
            filter={["name"]}
          />
        </CardContent>
      </Card>
    </section>
  );
}
