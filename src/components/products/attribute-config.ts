import type { CategoryKey } from "@/types/product.types";

export type AttributeColumnMeta = {
  key: string;
  label: string;
  sortable?: boolean;
};

export const attributeColumnsByCategory: Record<
  CategoryKey,
  AttributeColumnMeta[]
> = {
  laptop: [
    { key: "colour", label: "Colour" },
    { key: "memory", label: "RAM", sortable: true },
    { key: "storage", label: "Storage", sortable: true },
    { key: "processor", label: "Processor" },
    { key: "processorBrand", label: "CPU Brand" },
    { key: "screenSize", label: "Screen", sortable: true },
  ],
  phone: [
    { key: "colour", label: "Colour" },
    { key: "storage", label: "Storage", sortable: true },
    { key: "memory", label: "RAM", sortable: true },
    { key: "processor", label: "Processor" },
    { key: "processorBrand", label: "CPU Brand" },
    { key: "screenSize", label: "Screen", sortable: true },
  ],
  electronics: [],
  computer: [
    { key: "colour", label: "Colour" },
    { key: "memory", label: "RAM", sortable: true },
    { key: "storage", label: "Storage", sortable: true },
    { key: "processor", label: "Processor" },
    { key: "processorBrand", label: "CPU Brand" },
  ],
};
