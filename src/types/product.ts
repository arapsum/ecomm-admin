export type BestSellingProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const topSellingProducts: BestSellingProduct[] = [
  {
    id: "9899a9ff-fff4-426e-9442-687730658df4",
    name: "Dell XPS 13",
    image: "/products/dell-xps-13.jpg",
    price: 799,
    quantity: 353,
  },
  {
    id: "7d29d80d-fdf0-4f7f-a3cb-4344c3bc920b",
    name: "Asus Zenbook S14",
    price: 749,
    quantity: 367,
    image: "/products/asus-zenbook-s14.jpg",
  },
  {
    id: "1ff51753-7782-463c-a4b4-503b1b8130cc",
    name: "Samsung Galaxy Book 5",
    image: "/products/samsung-galaxy-book-5.jpg",
    price: 849,
    quantity: 321,
  },
  {
    id: "391db8d1-0d17-43ae-a89a-b9780febf88a",
    name: "Apple MacBook Pro M4",
    image: "/products/apple-macbook-pro-m4.jpg",
    price: 899,
    quantity: 212,
  },
  {
    id: "68a34098-5458-40b8-ab08-5a0a4846d02e",
    name: "Lenovo Yoga 7i",
    image: "/products/lenovo-yoga-7i.jpg",
    price: 749,
    quantity: 289,
  },
  {
    id: "e67508b0-76cd-4d36-a0c7-9bb95b8d558c",
    name: "Acer Swift Go 16",
    image: "/products/acer-swift-go-16.jpg",
    price: 749,
    quantity: 381,
  },
  {
    id: "9d8f1e75-f4ca-4e60-ab96-229f159a5204",
    name: "HP Probook 450",
    image: "/products/hp-probook-450.jpg",
    price: 749,
    quantity: 389,
  },
  {
    id: "be4bfd0f-f637-4811-a52f-0f0cbc73d085",
    name: "Samsung Galaxy S25+",
    image: "/products/samsung-galaxy-S25.jpg",
    price: 899,
    quantity: 578,
  },
  {
    id: "61ffadae-cfc3-4e08-878d-80dbb19e7c2e",
    name: "Google Pixel 10",
    image: "/products/google-pixel-10.jpg",
    price: 849,
    quantity: 400,
  },
  {
    id: "00218e2b-e101-4e1f-9553-044f03d8a318",
    name: "Lenovo Yoga 9i",
    image: "/products/lenovo-yoga-9i.jpg",
    price: 1099,
    quantity: 120,
  },
];
