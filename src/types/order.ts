export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  product: string;
  date: string;
  amount: number;
  status: OrderStatus;
}

export const recentOrders: Order[] = [
  {
    id: "ORD-001",
    customer: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alice",
    },
    product: "Wireless Headphones",
    date: "2025-04-01",
    amount: 129.99,
    status: "delivered",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Bob Martinez",
      email: "bob@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Bob",
    },
    product: "Smart Watch",
    date: "2025-04-02",
    amount: 249.0,
    status: "shipped",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Carol White",
      email: "carol@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Carol",
    },
    product: "Mechanical Keyboard",
    date: "2025-04-03",
    amount: 89.95,
    status: "processing",
  },
  {
    id: "ORD-004",
    customer: {
      name: "David Lee",
      email: "david@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=David",
    },
    product: "USB-C Hub",
    date: "2025-04-03",
    amount: 45.0,
    status: "pending",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Eva Brown",
      email: "eva@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eva",
    },
    product: "Monitor Stand",
    date: "2025-04-04",
    amount: 60.5,
    status: "delivered",
  },
  {
    id: "ORD-006",
    customer: {
      name: "Frank Garcia",
      email: "frank@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Frank",
    },
    product: "Webcam HD",
    date: "2025-04-04",
    amount: 79.99,
    status: "cancelled",
  },
  {
    id: "ORD-007",
    customer: {
      name: "Grace Kim",
      email: "grace@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Grace",
    },
    product: "Desk Lamp",
    date: "2025-04-05",
    amount: 39.0,
    status: "shipped",
  },
  {
    id: "ORD-008",
    customer: {
      name: "Henry Wilson",
      email: "henry@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Henry",
    },
    product: "Laptop Sleeve",
    date: "2025-04-06",
    amount: 24.99,
    status: "processing",
  },
  {
    id: "ORD-009",
    customer: {
      name: "Isla Turner",
      email: "isla@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Isla",
    },
    product: "Portable SSD",
    date: "2025-04-07",
    amount: 109.0,
    status: "pending",
  },
  {
    id: "ORD-010",
    customer: {
      name: "Jack Davis",
      email: "jack@example.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jack",
    },
    product: "Noise Cancelling Earbuds",
    date: "2025-04-07",
    amount: 199.99,
    status: "delivered",
  },
];
