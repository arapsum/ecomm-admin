type Category = {
  id: string;
  name: CategoryKey;
  slug: string;
  parentId?: string;
};

type CategoryKey = keyof Attribute;

type LaptopAttribute = {
  colour: string;
  memory: string;
  storage: string;
  processor: string;
  screenSize: string;
  processorBrand: string;
};

type PhoneAttribute = {
  colour: string;
  storage: string;
  processor: string;
  screenSize: string;
  memory: string;
  processorBrand: string;
};

type ElectronicsAttribute = {};

type ComputerAttribute = {};

type SpecificationEntry<T extends CategoryKey> = {
  value: string;
  derivedFrom?: keyof Attribute[T]; // The attribute value i.e. memory size will come from the option.attribute.memory
};

type Specification<T extends CategoryKey> = Record<
  string,
  Record<string, SpecificationEntry<T>>
>;

type Attribute = {
  laptop: LaptopAttribute;
  phone: PhoneAttribute;
  electronics: ElectronicsAttribute;
  computer: ComputerAttribute;
};

type Option<T extends CategoryKey> = {
  id: string;
  sku: string;
  price: number;
  salePrice: number;
  quantity: number;
  attributes: Attribute[T];
};

type Product<T extends CategoryKey> = {
  id: string;
  brand: string;
  category: T;
  name: string;
  model: string;
  modelNumber: string;
  images: { url: string; order: number; alt: string }[];
  options: Option<T>[];
  year: number;
  description?: string;
  specifications?: Specification<T>;
};

type AnyOption = { [K in keyof Attribute]: Option<K> }[keyof Attribute];

type CartProduct<T extends CategoryKey> = {
  id: string;
  brand: string;
  category: T;
  name: string;
  model: string;
  modelNumber: string;
  images: { url: string; order: number; alt?: string }[];
  option: Option<T>;
  year: number;
  description?: string;
  specifications?: Specification<T>;
};

type AnyProduct = { [K in keyof Attribute]: Product<K> }[keyof Attribute];
type AnyCartProduct = {
  [K in keyof Attribute]: CartProduct<K>;
}[keyof Attribute];

export type {
  AnyCartProduct,
  AnyOption,
  AnyProduct,
  Attribute,
  CartProduct,
  Category,
  CategoryKey,
  LaptopAttribute,
  Option,
  PhoneAttribute,
  Product,
  Specification,
  SpecificationEntry,
};
