import type { Category } from "@/types/product.types";

const categories: Category[] = [
  {
    id: "1",
    name: "electronics",
    slug: "electronics",
  },
  {
    id: "2",
    name: "computer",
    slug: "computers",
    parentId: "1",
  },
  {
    id: "3",
    name: "laptop",
    slug: "laptops",
    parentId: "2",
  },
  {
    id: "4",
    name: "phone",
    slug: "phones",
    parentId: "1",
  },
];

export default categories;
