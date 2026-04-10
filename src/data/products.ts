import type { AnyProduct } from "@/types/product.types";

const products: AnyProduct[] = [
  {
    id: "5",
    brand: "Dell",
    category: "laptop",
    name: "XPS 13",
    modelNumber: "XPS9345-SX12784BLK-PUS",
    model: "XPS 13 9345 PLUS",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "6586063",
        price: 1199,
        salePrice: 999,
        quantity: 12,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "16GB",
          storage: "256GB",
          colour: "Graphite",
          screenSize: '13.4"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "2",
        sku: "6586064",
        price: 1299,
        salePrice: 1099,
        quantity: 15,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "24GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '13.4"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "3",
        sku: "6586065",
        price: 1499,
        salePrice: 1259,
        quantity: 13,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "512GB",
          colour: "Graphite",
          screenSize: '13.4"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "4",
        sku: "6586066",
        price: 1759,
        salePrice: 1499,
        quantity: 17,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "1TB",
          colour: "Silver",
          screenSize: '13.4"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/dell-xps-13.jpg",
        order: 1,
        alt: "Dell XPS 13 in Graphite - Front view showing display and lid",
      },
      {
        url: "/products/dell-xps-13-2.jpg",
        order: 2,
        alt: "Dell XPS 13 in Graphite - Angled three-quarter view with lid open",
      },
      {
        url: "/products/dell-xps-13-3.jpg",
        order: 3,
        alt: "Dell XPS 13 in Graphite - Keyboard and trackpad detail",
      },
      {
        url: "/products/dell-xps-13-4.jpg",
        order: 4,
        alt: "Dell XPS 13 in Graphite - Side profile showing slim chassis",
      },
      {
        url: "/products/dell-xps-13-5.jpg",
        order: 5,
        alt: "Dell XPS 13 in Graphite - Rear view showing aluminum lid",
      },
      {
        url: "/products/dell-xps-13-6.jpg",
        order: 6,
        alt: "Dell XPS 13 in Graphite - Port and connectivity detail",
      },
    ],
    description:
      "XPS laptops are constructed of metal and glass in both light and dark colors for a sleek, iconic design that you are proud to own. Crafted of premium materials, they are precision cut from a block of aluminum in two pieces so there is no variability, and the construction is strong and durable.",
    specifications: {
      Dislay: {
        "Screen Size": {
          value: "",
          derivedFrom: "screenSize",
        },
        "Screen Resolutin": {
          value: "2800x1800",
        },
        "Display Type": {
          value: "OLED",
        },
        Brightness: {
          value: "500 nits",
        },
      },
      Processor: {
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        Series: {
          value: "X Elite",
        },
        "Base Speed": {
          value: "2.2 GHz",
        },
        "Boost Speed": {
          value: "4.2 GHz",
        },
      },
      Memory: {
        "RAM Installed": {
          value: "",
          derivedFrom: "memory",
        },
        "RAM Technology": {
          value: "LPDDR5X",
        },
      },
      Storage: {
        "Storage Capacity": {
          value: "",
          derivedFrom: "storage",
        },
        "Storage Type": {
          value: "SSD",
        },
      },
    },
  },
  {
    id: "6",
    brand: "Asus",
    category: "laptop",
    name: "Zenbook S14",
    modelNumber: "UX3405CA-U9321TB",
    model: "Zenbook 14 OLED",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "12077789",
        price: 899,
        salePrice: 799,
        quantity: 14,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "16GB",
          storage: "512GB",
          colour: "Jasper Grey",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "12077790",
        price: 1050,
        salePrice: 949,
        quantity: 19,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "24GB",
          storage: "512GB",
          colour: "Scandinavian White",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "3",
        sku: "12077791",
        price: 1050,
        salePrice: 949,
        quantity: 11,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "24GB",
          storage: "512GB",
          colour: "Jasper Grey",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "4",
        sku: "12077792",
        price: 1699,
        salePrice: 1449,
        quantity: 32,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "32GB",
          storage: "1TB",
          colour: "Scandinavian White",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/asus-zenbook-s14.jpg",
        order: 1,
        alt: "Asus Zenbook S14 - Front view showing OLED display and lid",
      },
      {
        url: "/products/asus-zenbook-s14-2.jpg",
        order: 2,
        alt: "Asus Zenbook S14 - Angled three-quarter view with lid open",
      },
      {
        url: "/products/asus-zenbook-s14-3.jpg",
        order: 3,
        alt: "Asus Zenbook S14 - Keyboard and trackpad close-up",
      },
      {
        url: "/products/asus-zenbook-s14-4.jpg",
        order: 4,
        alt: "Asus Zenbook S14 - Side profile showing slim chassis depth",
      },
      {
        url: "/products/asus-zenbook-s14-5.jpg",
        order: 5,
        alt: "Asus Zenbook S14 - Rear view showing lid design",
      },
      {
        url: "/products/asus-zenbook-s14-6.jpg",
        order: 6,
        alt: "Asus Zenbook S14 - Port selection and connectivity detail",
      },
      {
        url: "/products/asus-zenbook-s14-7.jpg",
        order: 6,
        alt: "Asus Zenbook S14 - Bottom panel and ventilation detail",
      },
    ],
    description:
      "Go the extra mile with the remarkably sleek Zenbook 14 — the ultimate ultraportable laptop that takes sophistication to a whole new level. Seize every moment using its enhanced extended-life battery, amplify your efficiency with an Intel Core Ultra 9 processor (Series 2) and Intel Arc GPU and find seamless connectivity with full I/O ports. Immerse your senses in its vivid Lumina OLED touch display and powerful super-linear speakers.",
    specifications: {
      Dislay: {
        "Screen Size": {
          value: "",
          derivedFrom: "screenSize",
        },
        "Screen Resolutin": {
          value: "1920x1080",
        },
        "Display Type": {
          value: "OLED",
        },
        Brightness: {
          value: "550 nits",
        },
      },
      Processor: {
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        Series: {
          value: "Core Ultra 9 Series 2",
        },
        "Base Speed": {
          value: "2.4 GHz",
        },
        "Boost Speed": {
          value: "4.5 GHz",
        },
      },
      Memory: {
        "RAM Installed": {
          value: "",
          derivedFrom: "memory",
        },
        "RAM Technology": {
          value: "LPDDR5X",
        },
      },
      Storage: {
        "Storage Capacity": {
          value: "",
          derivedFrom: "storage",
        },
        "Storage Type": {
          value: "SSD",
        },
      },
    },
  },
  {
    id: "7",
    brand: "Acer",
    category: "laptop",
    name: "Swift Go 14",
    modelNumber: "SFG14-73-72TZ",
    model: "Swift Go 14 OLED",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "7741001",
        price: 799,
        salePrice: 699,
        quantity: 0,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "16GB",
          storage: "512GB",
          colour: "Pure Silver",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "7741002",
        price: 999,
        salePrice: 879,
        quantity: 0,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Pure Silver",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "3",
        sku: "7741003",
        price: 1099,
        salePrice: 949,
        quantity: 0,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "32GB",
          storage: "1TB",
          colour: "Mist Green",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/acer-swift-go-14.jpg",
        order: 1,
        alt: "Acer Swift Go 14 OLED in Pure Silver - Front view showing display and lid",
      },
      {
        url: "/products/acer-swift-go-14-2.jpg",
        order: 2,
        alt: "Acer Swift Go 14 OLED - Angled three-quarter view with lid open",
      },
      {
        url: "/products/acer-swift-go-14-3.jpg",
        order: 3,
        alt: "Acer Swift Go 14 OLED - Keyboard, trackpad and palm rest detail",
      },
      {
        url: "/products/acer-swift-go-14-4.jpg",
        order: 4,
        alt: "Acer Swift Go 14 OLED - Side profile showing slim chassis",
      },
      {
        url: "/products/acer-swift-go-14-5.jpg",
        order: 5,
        alt: "Acer Swift Go 14 OLED - Rear view and lid close-up",
      },
    ],
    description:
      "The Acer Swift Go 14 combines a stunning OLED display with Intel Core Ultra processing power in an ultra-thin, lightweight chassis. Designed for creators and professionals on the move, it delivers vivid visuals, all-day battery life, and an expansive port selection.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "2880x1800" },
        "Display Type": { value: "OLED" },
        Brightness: { value: "400 nits" },
        "Refresh Rate": { value: "90Hz" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra Series 2" },
        "Base Speed": { value: "1.8 GHz" },
        "Boost Speed": { value: "4.8 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5X" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      Connectivity: {
        WiFi: { value: "Wi-Fi 7" },
        Bluetooth: { value: "Bluetooth 5.4" },
        "USB-C Ports": { value: "2x Thunderbolt 4" },
      },
    },
  },

  {
    id: "8",
    brand: "Acer",
    category: "laptop",
    name: "Swift Go 16",
    modelNumber: "SFG16-72-55WY",
    model: "Swift Go 16 OLED",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "7742001",
        price: 1099,
        salePrice: 949,
        quantity: 10,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Pure Silver",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "7742002",
        price: 1299,
        salePrice: 1099,
        quantity: 8,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "32GB",
          storage: "1TB",
          colour: "Pure Silver",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "3",
        sku: "7742003",
        price: 1499,
        salePrice: 1299,
        quantity: 6,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "32GB",
          storage: "2TB",
          colour: "Mist Green",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/acer-swift-go-16.jpg",
        order: 1,
        alt: "Acer Swift Go 16 OLED in Pure Silver - Front view showing 16-inch display",
      },
      {
        url: "/products/acer-swift-go-16-2.jpg",
        order: 2,
        alt: "Acer Swift Go 16 OLED - Angled three-quarter view with lid open",
      },
      {
        url: "/products/acer-swift-go-16-3.jpg",
        order: 3,
        alt: "Acer Swift Go 16 OLED - Keyboard and trackpad detail",
      },
      {
        url: "/products/acer-swift-go-16-4.jpg",
        order: 4,
        alt: "Acer Swift Go 16 OLED - Side profile showing slim form factor",
      },
    ],
    description:
      "The Acer Swift Go 16 brings a cinematic 16-inch OLED experience to an incredibly slim form factor. Powered by Intel Core Ultra processors, it's built for productivity and content creation with a larger canvas, superior color accuracy, and advanced AI features.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "3200x2000" },
        "Display Type": { value: "OLED" },
        Brightness: { value: "500 nits" },
        "Refresh Rate": { value: "120Hz" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra Series 2" },
        "Base Speed": { value: "2.0 GHz" },
        "Boost Speed": { value: "5.1 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5X" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      Battery: {
        Capacity: { value: "75Wh" },
        "Battery Life": { value: "Up to 12 hours" },
        "Fast Charging": { value: "Yes" },
      },
    },
  },

  {
    id: "9",
    brand: "Samsung",
    category: "laptop",
    name: "Galaxy Book5",
    modelNumber: "NP750XGK-KG1US",
    model: "Galaxy Book5 360",
    year: 2025,
    options: [
      {
        id: "1",
        sku: "8831001",
        price: 1099,
        salePrice: 999,
        quantity: 22,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "16GB",
          storage: "512GB",
          colour: "Sapphire Blue",
          screenSize: '15.6"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "8831002",
        price: 1299,
        salePrice: 1149,
        quantity: 16,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "16GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '15.6"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "3",
        sku: "8831003",
        price: 1499,
        salePrice: 1299,
        quantity: 9,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "32GB",
          storage: "1TB",
          colour: "Sapphire Blue",
          screenSize: '15.6"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/samsung-galaxy-book5.jpg",
        order: 3,
        alt: "Samsung Galaxy Book5 360 in Sapphire Blue - Front view showing touchscreen display",
      },
      {
        url: "/products/samsung-galaxy-book5-2.jpg",
        order: 2,
        alt: "Samsung Galaxy Book5 360 - Angled view with lid open showing keyboard",
      },
      {
        url: "/products/samsung-galaxy-book5-3.jpg",
        order: 1,
        alt: "Samsung Galaxy Book5 360 - Tablet mode with touchscreen facing up",
      },
      {
        url: "/products/samsung-galaxy-book5-4.jpg",
        order: 4,
        alt: "Samsung Galaxy Book5 360 - Tent mode showing 360-degree hinge",
      },
      {
        url: "/products/samsung-galaxy-book5-5.jpg",
        order: 5,
        alt: "Samsung Galaxy Book5 360 - Side profile showing slim 2-in-1 chassis",
      },
    ],
    description:
      "The Samsung Galaxy Book5 360 is a versatile 2-in-1 laptop that seamlessly integrates into the Galaxy ecosystem. With its vivid AMOLED touchscreen, S Pen support, and Intel Core Ultra performance, it adapts effortlessly between laptop and tablet mode.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "1920x1080" },
        "Display Type": { value: "AMOLED" },
        Brightness: { value: "400 nits" },
        "Touch Screen": { value: "Yes" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra Series 2" },
        "Base Speed": { value: "1.6 GHz" },
        "Boost Speed": { value: "4.5 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      "Galaxy Features": {
        "S Pen": { value: "Included" },
        "Samsung DeX": { value: "Supported" },
        "Galaxy AI": { value: "Yes" },
      },
    },
  },

  {
    id: "10",
    brand: "Samsung",
    category: "laptop",
    name: "Galaxy Book5 Pro",
    modelNumber: "NP960XGK-KG1US",
    model: "Galaxy Book5 Pro 360",
    year: 2025,
    options: [
      {
        id: "1",
        sku: "8832001",
        price: 1599,
        salePrice: 1399,
        quantity: 11,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Moonstone Gray",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "8832002",
        price: 1899,
        salePrice: 1649,
        quantity: 7,
        attributes: {
          processor: "Intel Core Ultra 9",
          memory: "32GB",
          storage: "1TB",
          colour: "Moonstone Gray",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "3",
        sku: "8832003",
        price: 2099,
        salePrice: 1849,
        quantity: 5,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "2TB",
          colour: "Platinum Silver",
          screenSize: '16.0"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/samsung-galaxy-book5-pro.jpg",
        order: 1,
        alt: "Samsung Galaxy Book5 Pro 360 in Moonstone Gray - Front view showing Dynamic AMOLED 2X display",
      },
      {
        url: "/products/samsung-galaxy-book5-pro-2.jpg",
        order: 2,
        alt: "Samsung Galaxy Book5 Pro 360 - Angled three-quarter view with lid open",
      },
      {
        url: "/products/samsung-galaxy-book5-pro-3.jpg",
        order: 3,
        alt: "Samsung Galaxy Book5 Pro 360 - Tablet mode with S Pen stylus",
      },
      {
        url: "/products/samsung-galaxy-book5-pro-4.jpg",
        order: 4,
        alt: "Samsung Galaxy Book5 Pro 360 - Keyboard and trackpad close-up",
      },
      {
        url: "/products/samsung-galaxy-book5-pro-5.jpg",
        order: 5,
        alt: "Samsung Galaxy Book5 Pro 360 - Side profile showing ultra-thin chassis",
      },
      {
        url: "/products/samsung-galaxy-book5-pro-6.jpg",
        order: 6,
        alt: "Samsung Galaxy Book5 Pro 360 - Tent mode and 360-degree hinge detail",
      },
    ],
    description:
      "The Samsung Galaxy Book5 Pro 360 redefines premium 2-in-1 performance with a breathtaking Dynamic AMOLED 2X display, Intel Core Ultra 9 processor, and the thinnest Galaxy Book chassis yet. Connect your Galaxy ecosystem like never before with seamless cross-device features and Galaxy AI.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "2880x1800" },
        "Display Type": { value: "Dynamic AMOLED 2X" },
        Brightness: { value: "500 nits" },
        "Refresh Rate": { value: "120Hz" },
        "Touch Screen": { value: "Yes" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra Series 2" },
        "Base Speed": { value: "2.2 GHz" },
        "Boost Speed": { value: "5.1 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5X" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      "Galaxy Features": {
        "S Pen": { value: "Included" },
        "Samsung DeX": { value: "Supported" },
        "Galaxy AI": { value: "Yes" },
        "Phone Link": { value: "Yes" },
      },
      Battery: {
        Capacity: { value: "76Wh" },
        "Fast Charging": { value: "65W" },
      },
    },
  },

  {
    id: "11",
    brand: "Apple",
    category: "laptop",
    name: "MacBook Pro M4",
    modelNumber: "MX2Y3LL/A",
    model: "MacBook Pro 14-inch M4",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "9901001",
        price: 1599,
        salePrice: 1499,
        quantity: 25,
        attributes: {
          processor: "Apple M4",
          memory: "16GB",
          storage: "512GB",
          colour: "Space Black",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
      {
        id: "2",
        sku: "9901002",
        price: 1799,
        salePrice: 1699,
        quantity: 20,
        attributes: {
          processor: "Apple M4",
          memory: "24GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
      {
        id: "3",
        sku: "9901003",
        price: 1999,
        salePrice: 1849,
        quantity: 13,
        attributes: {
          processor: "Apple M4 Pro",
          memory: "24GB",
          storage: "512GB",
          colour: "Space Black",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
      {
        id: "4",
        sku: "9901004",
        price: 2399,
        salePrice: 2199,
        quantity: 8,
        attributes: {
          processor: "Apple M4 Pro",
          memory: "48GB",
          storage: "1TB",
          colour: "Silver",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
    ],
    images: [
      {
        url: "/products/apple-macbook-pro-m4.jpg",
        order: 1,
        alt: "Apple MacBook Pro 14-inch M4 in Space Black - Front view showing Liquid Retina XDR display",
      },
      {
        url: "/products/apple-macbook-pro-m4-2.jpg",
        order: 2,
        alt: "Apple MacBook Pro 14-inch M4 - Angled view showing keyboard and trackpad",
      },
      {
        url: "/products/apple-macbook-pro-m4-3.jpg",
        order: 3,
        alt: "Apple MacBook Pro 14-inch M4 - Side profile showing MagSafe and Thunderbolt ports",
      },
      {
        url: "/products/apple-macbook-pro-m4-4.jpg",
        order: 4,
        alt: "Apple MacBook Pro 14-inch M4 - Rear view showing Apple logo on aluminum lid",
      },
      {
        url: "/products/apple-macbook-pro-m4-5.jpg",
        order: 5,
        alt: "Apple MacBook Pro 14-inch M4 - Closed lid showing slim profile",
      },
    ],
    description:
      "The MacBook Pro with M4 is the world's most advanced consumer laptop, featuring Apple's breakthrough M4 chip with incredible CPU and GPU performance. With a stunning Liquid Retina XDR display, up to 24 hours of battery life, and a suite of pro connectivity, it handles the most demanding workflows with ease.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "3024x1964" },
        "Display Type": { value: "Liquid Retina XDR" },
        Brightness: { value: "1000 nits sustained / 1600 nits peak" },
        "Refresh Rate": { value: "ProMotion 120Hz" },
        "True Tone": { value: "Yes" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        "CPU Cores": { value: "10-core" },
        "GPU Cores": { value: "10-core" },
        "Neural Engine": { value: "16-core" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "Memory Bandwidth": { value: "120GB/s" },
        "RAM Technology": { value: "Unified Memory" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      Battery: {
        Capacity: { value: "72.4Wh" },
        "Battery Life": { value: "Up to 24 hours" },
        "Fast Charging": { value: "96W USB-C" },
      },
      Connectivity: {
        WiFi: { value: "Wi-Fi 6E" },
        Bluetooth: { value: "Bluetooth 5.3" },
        Ports: { value: "3x Thunderbolt 4, HDMI, SD Card, MagSafe 3" },
      },
    },
  },

  {
    id: "12",
    brand: "Lenovo",
    category: "laptop",
    name: "Yoga 9i",
    modelNumber: "83AC002LUS",
    model: "Yoga 9i 2-in-1 Gen 9",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "6623001",
        price: 1299,
        salePrice: 1099,
        quantity: 17,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Oatmeal",
          screenSize: '14.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "6623002",
        price: 1499,
        salePrice: 1299,
        quantity: 12,
        attributes: {
          processor: "AMD Ryzen 7 220",
          memory: "32GB",
          storage: "1TB",
          colour: "Oatmeal",
          screenSize: '14.0"',
          processorBrand: "AMD",
        },
      },
      {
        id: "3",
        sku: "6623003",
        price: 1699,
        salePrice: 1449,
        quantity: 9,
        attributes: {
          processor: "AMD Ryzen 9 440",
          memory: "32GB",
          storage: "1TB",
          colour: "Tidal Teal",
          screenSize: '14.0"',
          processorBrand: "AMD",
        },
      },
    ],
    images: [
      {
        url: "/products/lenovo-yoga-9i.jpg",
        order: 1,
        alt: "Lenovo Yoga 9i Gen 9 in Oatmeal - Front view showing OLED touchscreen display",
      },
      {
        url: "/products/lenovo-yoga-9i-2.jpg",
        order: 2,
        alt: "Lenovo Yoga 9i Gen 9 - Angled view showing keyboard and rotating soundbar hinge",
      },
      {
        url: "/products/lenovo-yoga-9i-3.jpg",
        order: 3,
        alt: "Lenovo Yoga 9i Gen 9 - Tablet mode with display facing outward",
      },
      {
        url: "/products/lenovo-yoga-9i-4.jpg",
        order: 4,
        alt: "Lenovo Yoga 9i Gen 9 - Tent mode showing 360-degree flexibility",
      },
      {
        url: "/products/lenovo-yoga-9i-5.jpg",
        order: 5,
        alt: "Lenovo Yoga 9i Gen 9 - Side profile showing rotating soundbar speaker hinge",
      },
      {
        url: "/products/lenovo-yoga-9i-6.jpg",
        order: 6,
        alt: "Lenovo Yoga 9i Gen 9 - Keyboard close-up with backlit keys",
      },
    ],
    description:
      "The Lenovo Yoga 9i is the ultimate 2-in-1 laptop, blending iconic design with rotating soundbar speakers and a buttery-smooth OLED touch display. Powered by Intel Core Ultra processors and featuring 360-degree flexibility, it transitions effortlessly between laptop, tent, stand, and tablet modes.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "2880x1800" },
        "Display Type": { value: "OLED" },
        Brightness: { value: "600 nits" },
        "Refresh Rate": { value: "90Hz" },
        "Touch Screen": { value: "Yes" },
        "Pen Support": { value: "Lenovo Digital Pen" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra Series 2" },
        "Base Speed": { value: "1.8 GHz" },
        "Boost Speed": { value: "4.8 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5X" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      Audio: {
        Speakers: { value: "Rotating Soundbar, 4x 2W" },
        "Dolby Atmos": { value: "Yes" },
      },
    },
  },

  {
    id: "13",
    brand: "Lenovo",
    category: "laptop",
    name: "Yoga Slim 7x",
    modelNumber: "83EDCTO1WWUS",
    model: "Yoga Slim 7x Gen 9",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "6624001",
        price: 1199,
        salePrice: 999,
        quantity: 21,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "1TB",
          colour: "Cosmic Blue",
          screenSize: '14.5"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "2",
        sku: "6624002",
        price: 1399,
        salePrice: 1199,
        quantity: 14,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "1TB",
          colour: "Platinum",
          screenSize: '14.5"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/lenovo-yoga-slim-7x.jpg",
        order: 1,
        alt: "Lenovo Yoga Slim 7x Gen 9 in Cosmic Blue - Front view showing OLED display and ultra-thin lid",
      },
      {
        url: "/products/lenovo-yoga-slim-7x-2.jpg",
        order: 2,
        alt: "Lenovo Yoga Slim 7x Gen 9 - Angled three-quarter view with lid open",
      },
      {
        url: "/products/lenovo-yoga-slim-7x-3.jpg",
        order: 3,
        alt: "Lenovo Yoga Slim 7x Gen 9 - Keyboard and trackpad close-up",
      },
      {
        url: "/products/lenovo-yoga-slim-7x-4.jpg",
        order: 4,
        alt: "Lenovo Yoga Slim 7x Gen 9 - Side profile highlighting 12.9mm ultra-slim chassis",
      },
      {
        url: "/products/lenovo-yoga-slim-7x-5.jpg",
        order: 5,
        alt: "Lenovo Yoga Slim 7x Gen 9 - Rear view showing aluminum lid and Lenovo logo",
      },
    ],
    description:
      "The Lenovo Yoga Slim 7x is redefining ultra-thin performance with the Snapdragon X Elite platform. Remarkably thin at just 12.9mm, it packs an OLED display, exceptional AI-driven performance, and Copilot+ PC capabilities into a featherlight chassis that weighs just 1.28kg.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "2944x1840" },
        "Display Type": { value: "OLED" },
        Brightness: { value: "600 nits" },
        "Refresh Rate": { value: "90Hz" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "X Elite" },
        "Base Speed": { value: "2.2 GHz" },
        "Boost Speed": { value: "4.2 GHz" },
        NPU: { value: "45 TOPS" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "LPDDR5X" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
      },
      Design: {
        Thickness: { value: "12.9mm" },
        Weight: { value: "1.28kg" },
        Material: { value: "Aluminium" },
      },
    },
  },

  {
    id: "14",
    brand: "HP",
    category: "laptop",
    name: "ProBook 460 G11",
    modelNumber: "A27BNUT#ABA",
    model: "ProBook 460 G11",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "5521001",
        price: 899,
        salePrice: 799,
        quantity: 30,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "8GB",
          storage: "256GB",
          colour: "Pike Silver",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "5521002",
        price: 1049,
        salePrice: 929,
        quantity: 25,
        attributes: {
          processor: "AMD Ryzen 5 220",
          memory: "16GB",
          storage: "512GB",
          colour: "Pike Silver",
          screenSize: '16.0"',
          processorBrand: "AMD",
        },
      },
      {
        id: "3",
        sku: "5521003",
        price: 1249,
        salePrice: 1099,
        quantity: 18,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Pike Silver",
          screenSize: '16.0"',
          processorBrand: "Intel",
        },
      },
      {
        id: "4",
        sku: "5521004",
        price: 1449,
        salePrice: 1249,
        quantity: 12,
        attributes: {
          processor: "AMD Ryzen 7 330",
          memory: "32GB",
          storage: "1TB",
          colour: "Pike Silver",
          screenSize: '16.0"',
          processorBrand: "AMD",
        },
      },
    ],
    images: [
      {
        url: "/products/hp-probook-460-g11.jpg",
        order: 1,
        alt: "HP ProBook 460 G11 in Pike Silver - Front view showing 16-inch IPS display",
      },
      {
        url: "/products/hp-probook-460-g11-2.jpg",
        order: 2,
        alt: "HP ProBook 460 G11 - Angled three-quarter view with lid open",
      },
      {
        url: "/products/hp-probook-460-g11-3.jpg",
        order: 3,
        alt: "HP ProBook 460 G11 - Keyboard with fingerprint reader and security features",
      },
      {
        url: "/products/hp-probook-460-g11-4.jpg",
        order: 4,
        alt: "HP ProBook 460 G11 - Side profile showing port selection",
      },
      {
        url: "/products/hp-probook-460-g11-5.jpg",
        order: 5,
        alt: "HP ProBook 460 G11 - Rear view showing durable MIL-SPEC chassis",
      },
    ],
    description:
      "The HP ProBook 460 G11 is built for business professionals who demand reliability and performance. Featuring Intel Core Ultra vPro processors, military-grade durability, and enterprise-level security with HP Wolf Security, it keeps your work protected and productive all day long.",
    specifications: {
      Display: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Screen Resolution": { value: "1920x1200" },
        "Display Type": { value: "IPS" },
        Brightness: { value: "300 nits" },
        "Anti-Glare": { value: "Yes" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
        Series: { value: "Core Ultra vPro" },
        "Base Speed": { value: "1.2 GHz" },
        "Boost Speed": { value: "4.5 GHz" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
        "RAM Technology": { value: "DDR5" },
        "RAM Slots": { value: "2 (Upgradeable)" },
      },
      Storage: {
        "Storage Capacity": { value: "", derivedFrom: "storage" },
        "Storage Type": { value: "SSD" },
        "Drive Bays": { value: "M.2 2280" },
      },
      Security: {
        "TPM Version": { value: "TPM 2.0" },
        "Fingerprint Reader": { value: "Yes" },
        "IR Camera": { value: "Windows Hello" },
        "HP Wolf Security": { value: "Yes" },
      },
      Durability: {
        "MIL-SPEC": { value: "MIL-STD-810H" },
      },
    },
  },
  {
    id: "15",
    brand: "Acer",
    category: "laptop",
    name: "Swift Go 14",
    modelNumber: "SFG14-73-58EP",
    model: "Swift Go 14 OLED",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "ACR-SFG14-16-512",
        price: 899,
        salePrice: 799,
        quantity: 10,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "16GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '14"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "ACR-SFG14-32-1TB",
        price: 1199,
        salePrice: 1049,
        quantity: 8,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "32GB",
          storage: "1TB",
          colour: "Gray",
          screenSize: '14"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/acer-swift-go-14.jpg",
        order: 1,
        alt: "Acer Swift Go 14 OLED in Silver - Front view showing display",
      },
      {
        url: "/products/acer-swift-go-14-2.jpg",
        order: 2,
        alt: "Acer Swift Go 14 OLED - Angled view with lid open showing keyboard",
      },
      {
        url: "/products/acer-swift-go-14-3.jpg",
        order: 3,
        alt: "Acer Swift Go 14 OLED - Side profile showing thin chassis",
      },
    ],
    description:
      "A lightweight OLED laptop designed for productivity and vibrant visuals with Intel's latest processors.",
    specifications: {
      Dislay: {
        "Screen Size": { value: "", derivedFrom: "screenSize" },
        "Display Type": { value: "OLED" },
      },
      Processor: {
        Brand: { value: "", derivedFrom: "processorBrand" },
        Model: { value: "", derivedFrom: "processor" },
      },
    },
  },

  {
    id: "16",
    brand: "Samsung",
    category: "laptop",
    name: "Galaxy Book 5 Pro",
    modelNumber: "NP960XFG-KA1US",
    model: "Galaxy Book5 Pro",
    year: 2025,
    options: [
      {
        id: "1",
        sku: "SMS-GB5-16-512",
        price: 1299,
        salePrice: 1149,
        quantity: 6,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Moonstone Gray",
          screenSize: '16"',
          processorBrand: "Intel",
        },
      },
      {
        id: "2",
        sku: "SMS-GB5-16-1024",
        price: 1499,
        salePrice: 1349,
        quantity: 23,
        attributes: {
          processor: "Snapdragon X Elite",
          memory: "32GB",
          storage: "1TB",
          colour: "Moonstone Gray",
          screenSize: '16"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/samsung-galaxy-book-5.jpg",
        order: 1,
        alt: "Samsung Galaxy Book5 Pro in Moonstone Gray - Front view showing 16-inch AMOLED display",
      },
      {
        url: "/products/samsung-galaxy-book-5-2.jpg",
        order: 2,
        alt: "Samsung Galaxy Book5 Pro - Angled three-quarter view with lid open",
      },
      {
        url: "/products/samsung-galaxy-book-5-3.jpg",
        order: 3,
        alt: "Samsung Galaxy Book5 Pro - Keyboard and trackpad close-up",
      },
      {
        url: "/products/samsung-galaxy-book-5-4.jpg",
        order: 4,
        alt: "Samsung Galaxy Book5 Pro - Side profile showing ultra-thin design",
      },
    ],
    description:
      "Premium Galaxy Book with AMOLED display, ultra-thin design, and seamless ecosystem integration.",
    specifications: {
      Dislay: {
        "Display Type": { value: "AMOLED" },
        Brightness: { value: "500 nits" },
      },
      Processor: {
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        "Number of Cores": {
          value: "10",
        },
      },
    },
  },

  {
    id: "17",
    brand: "Apple",
    category: "laptop",
    name: "MacBook Pro 14",
    modelNumber: "MX2H3LL/A",
    model: "MacBook Pro M4",
    year: 2025,
    options: [
      {
        id: "1",
        sku: "APL-MBP14-18-512",
        price: 1999,
        salePrice: 1849,
        quantity: 7,
        attributes: {
          processor: "Apple M4",
          memory: "18GB",
          storage: "512GB",
          colour: "Space Black",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
      {
        id: "2",
        sku: "APL-MBP14-36-1TB",
        price: 2499,
        salePrice: 2299,
        quantity: 5,
        attributes: {
          processor: "Apple M4 Pro",
          memory: "36GB",
          storage: "1TB",
          colour: "Silver",
          screenSize: '14.2"',
          processorBrand: "Apple",
        },
      },
    ],
    images: [
      {
        url: "/products/apple-macbook-pro-14.jpg",
        order: 1,
        alt: "Apple MacBook Pro 14 M4 in Space Black - Front view showing Liquid Retina XDR display",
      },
      {
        url: "/products/apple-macbook-pro-14-2.jpg",
        order: 2,
        alt: "Apple MacBook Pro 14 M4 - Angled view showing keyboard and Force Touch trackpad",
      },
      {
        url: "/products/apple-macbook-pro-14-3.jpg",
        order: 3,
        alt: "Apple MacBook Pro 14 M4 - Closed lid showing Apple logo on aluminum chassis",
      },
    ],
    description:
      "Supercharged with Apple M4 chips delivering exceptional performance and battery life.",
    specifications: {
      Processor: {
        Brand: { value: "Apple" },
        Series: { value: "M4" },
      },
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
      },
    },
  },

  {
    id: "18",
    brand: "Lenovo",
    category: "laptop",
    name: "Yoga 9i",
    modelNumber: "83B1001XUS",
    model: "Yoga 9i Gen 9",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "LNV-Y9I-16-512",
        price: 1399,
        salePrice: 1249,
        quantity: 9,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "512GB",
          colour: "Storm Grey",
          screenSize: '14"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/lenovo-yoga-9i.jpg",
        order: 1,
        alt: "Lenovo Yoga 9i Gen 9 in Storm Grey - Front view showing OLED touchscreen",
      },
      {
        url: "/products/lenovo-yoga-9i-2.jpg",
        order: 2,
        alt: "Lenovo Yoga 9i Gen 9 - Angled view showing keyboard and rotating soundbar hinge",
      },
    ],
    description:
      "Convertible 2-in-1 laptop with premium build, OLED display, and versatile usage modes.",
    specifications: {
      Dislay: {
        "Display Type": { value: "OLED" },
      },
    },
  },

  {
    id: "19",
    brand: "HP",
    category: "laptop",
    name: "ProBook 450",
    modelNumber: "B0BR5UT#ABA",
    model: "ProBook 450 G10",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "HP-PB450-16-512",
        price: 849,
        salePrice: 749,
        quantity: 20,
        attributes: {
          processor: "Intel Core i5",
          memory: "16GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '15.6"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/hp-probook-450.jpg",
        order: 1,
        alt: "HP ProBook 450 G10 in Silver - Front view showing 15.6-inch display",
      },
      {
        url: "/products/hp-probook-450-2.jpg",
        order: 3,
        alt: "HP ProBook 450 G10 - Keyboard and trackpad with fingerprint reader",
      },
      {
        url: "/products/hp-probook-450-3.jpg",
        order: 2,
        alt: "HP ProBook 450 G10 - Angled three-quarter view with lid open",
      },
      {
        url: "/products/hp-probook-450-4.jpg",
        order: 4,
        alt: "HP ProBook 450 G10 - Side profile showing port layout",
      },
    ],
    description:
      "Reliable business laptop with solid performance and essential security features.",
    specifications: {
      Processor: {
        Brand: { value: "Intel" },
      },
      Storage: {
        "Storage Type": { value: "SSD" },
      },
    },
  },

  {
    id: "20",
    brand: "Acer",
    category: "laptop",
    name: "Swift Go 16",
    modelNumber: "SFG16-72T",
    model: "Swift Go 16",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "ACR-SFG16-16-1TB",
        price: 1099,
        salePrice: 999,
        quantity: 12,
        attributes: {
          processor: "Intel Core Ultra 7",
          memory: "16GB",
          storage: "1TB",
          colour: "Silver",
          screenSize: '16"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/acer-swift-go-16-ai.jpg",
        order: 1,
        alt: "Acer Swift Go 16 in Silver - Front view showing 16-inch display",
      },
      {
        url: "/products/acer-swift-go-16-ai-2.jpg",
        order: 2,
        alt: "Acer Swift Go 16 - Angled view with lid open showing keyboard",
      },
      {
        url: "/products/acer-swift-go-16-ai-3.jpg",
        order: 3,
        alt: "Acer Swift Go 16 - Side profile showing slim large-screen chassis",
      },
    ],
    description:
      "Large-screen productivity laptop with slim design and strong performance.",
    specifications: {},
  },

  {
    id: "21",
    brand: "Samsung",
    category: "laptop",
    name: "Galaxy Book 5 360",
    modelNumber: "NP750QFG-KA2US",
    model: "Galaxy Book5 360",
    year: 2025,
    options: [
      {
        id: "1",
        sku: "SMS-GB5-360-16-512",
        price: 1199,
        salePrice: 1049,
        quantity: 11,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "16GB",
          storage: "512GB",
          colour: "Silver",
          screenSize: '15.6"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/samsung-galaxy-book-5-360.jpg",
        order: 1,
        alt: "Samsung Galaxy Book5 360 in Silver - Front view showing 15.6-inch AMOLED touchscreen",
      },
      {
        url: "/products/samsung-galaxy-book-5-360-2.jpg",
        order: 2,
        alt: "Samsung Galaxy Book5 360 - Tablet mode with S Pen stylus",
      },
      {
        url: "/products/samsung-galaxy-book-5-360-3.jpg",
        order: 3,
        alt: "Samsung Galaxy Book5 360 - Tent mode showing 360-degree hinge",
      },
      {
        url: "/products/samsung-galaxy-book-5-360-4.jpg",
        order: 4,
        alt: "Samsung Galaxy Book5 360 - Side profile showing slim 2-in-1 form factor",
      },
    ],
    description:
      "Flexible 2-in-1 laptop with AMOLED display and S Pen support.",
    specifications: {
      Dislay: {
        "Display Type": { value: "AMOLED" },
      },
    },
  },

  {
    id: "22",
    brand: "Lenovo",
    category: "laptop",
    name: "Yoga 7i",
    modelNumber: "82YL0001US",
    model: "Yoga 7i Gen 9",
    year: 2024,
    options: [
      {
        id: "1",
        sku: "LNV-Y7I-16-512",
        price: 999,
        salePrice: 899,
        quantity: 18,
        attributes: {
          processor: "Intel Core Ultra 5",
          memory: "16GB",
          storage: "512GB",
          colour: "Arctic Grey",
          screenSize: '14"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/lenovo-yoga-7i.jpg",
        order: 1,
        alt: "Lenovo Yoga 7i Gen 9 in Arctic Grey - Front view showing touchscreen display",
      },
      {
        url: "/products/lenovo-yoga-7i-2.jpg",
        order: 2,
        alt: "Lenovo Yoga 7i Gen 9 - Angled view with lid open showing keyboard",
      },
      {
        url: "/products/lenovo-yoga-7i-3.jpg",
        order: 3,
        alt: "Lenovo Yoga 7i Gen 9 - Tablet mode with display facing outward",
      },
      {
        url: "/products/lenovo-yoga-7i-4.jpg",
        order: 4,
        alt: "Lenovo Yoga 7i Gen 9 - Tent mode showing 360-degree hinge flexibility",
      },
      {
        url: "/products/lenovo-yoga-7i-5.jpg",
        order: 5,
        alt: "Lenovo Yoga 7i Gen 9 - Side profile showing slim chassis",
      },
    ],
    description: "Balanced 2-in-1 laptop offering performance and portability.",
    specifications: {
      Memory: {
        "RAM Installed": { value: "", derivedFrom: "memory" },
      },
    },
  },
  {
    id: "23",
    category: "laptop",
    brand: "Dell",
    name: "Pro 16",
    model: 'Pro 16 FHD 16"',
    modelNumber: "USEDB16250HBTSHVJJ",
    year: 2025,
    description:
      "Essential productivity in a new, modern design. Enhanced performance, long-lasting battery life, and all-new innovative design makes this a device you can rely on. Dell Pro laptops are designed with up to 30% PCR plastic. AI PCs work smarter. AI capable PC with exceptional battery life, Intel Core Ultra processors, and a sleek, modular design for enhanced durability. With the help of Copilot in Windows, you have instant access to your own personal AI assistant using the Windows Copilot key. And with fast connectivity, you can stay productive from anywhere.",
    options: [
      {
        id: "1",
        sku: "12267674",
        price: 1399,
        salePrice: 1299,
        quantity: 22,
        attributes: {
          colour: "Magnetite Black",
          processor: "AMD Ryzen 5 220",
          memory: "32GB",
          storage: "1TB",
          screenSize: '16"',
          processorBrand: "AMD",
        },
      },
      {
        id: "2",
        sku: "12267675",
        price: 1359,
        salePrice: 1309,
        quantity: 20,
        attributes: {
          colour: "Magnetite Black",
          processor: "AMD Ryzen 7 220",
          memory: "32GB",
          storage: "1TB",
          screenSize: '16"',
          processorBrand: "Intel",
        },
      },
    ],
    images: [
      {
        url: "/products/dell-pro-16.jpg",
        order: 1,
        alt: "Dell Pro 16 in Magnetite Black - Front view showing 16-inch FHD IPS display",
      },
      {
        url: "/products/dell-pro-16-2.jpg",
        order: 2,
        alt: "Dell Pro 16 - Angled three-quarter view with lid open showing keyboard",
      },
      {
        url: "/products/dell-pro-16-3.jpg",
        order: 3,
        alt: "Dell Pro 16 - Keyboard close-up with backlit keys and Windows Copilot key",
      },
      {
        url: "/products/dell-pro-16-4.jpg",
        order: 4,
        alt: "Dell Pro 16 - Side profile showing port selection and slim chassis",
      },
    ],
    specifications: {
      Processor: {
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
      },
      Display: {
        "Display Type": {
          value: "LCD",
        },
        "Screen Type": {
          value: "IPS",
        },
        "Screen Size": {
          value: "",
          derivedFrom: "screenSize",
        },
        Brightness: {
          value: "300 nits",
        },
      },
      Storage: {
        Type: {
          value: "SSD",
        },
        "Total Storage Capacity": {
          value: "",
          derivedFrom: "storage",
        },
      },
    },
  },
  {
    id: "24",
    category: "phone",
    brand: "Samsung",
    name: "Gallaxy S25",
    model: "Galaxy S25 5G",
    modelNumber: "SM-S931B",
    year: 2025,
    description:
      "Essential productivity in a new, modern design. Enhanced performance, long-lasting battery life, and all-new innovative design makes this a device you can rely on. Dell Pro laptops are designed with up to 30% PCR plastic. AI PCs work smarter. AI capable PC with exceptional battery life, Intel Core Ultra processors, and a sleek, modular design for enhanced durability. With the help of Copilot in Windows, you have instant access to your own personal AI assistant using the Windows Copilot key. And with fast connectivity, you can stay productive from anywhere.",
    options: [
      {
        id: "1",
        sku: "1507674",
        price: 659,
        salePrice: 599,
        quantity: 15,
        attributes: {
          colour: "Navy",
          processor: "Snapdragon 8 Elite",
          memory: "12GB",
          storage: "128GB",
          screenSize: '6.2"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "2",
        sku: "15067675",
        price: 799,
        salePrice: 699,
        quantity: 6,
        attributes: {
          colour: "Navy",
          processor: "Snapdragon 8 Elite",
          memory: "12GB",
          storage: "256GB",
          screenSize: '6.2"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/samsung-galaxy-S25.jpg",
        order: 1,
        alt: "Samsung Galaxy S25 in Navy - Front view showing 6.2-inch AMOLED display",
      },
      {
        url: "/products/samsung-galaxy-S25-2.jpg",
        order: 2,
        alt: "Samsung Galaxy S25 in Navy - Rear view showing triple camera system",
      },
      {
        url: "/products/samsung-galaxy-S25-3.jpg",
        order: 3,
        alt: "Samsung Galaxy S25 - Side profile showing slim frame and volume buttons",
      },
      {
        url: "/products/samsung-galaxy-S25-4.jpg",
        order: 4,
        alt: "Samsung Galaxy S25 - Angled view showing display and rear panel finish",
      },
    ],
    specifications: {
      Processor: {
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
      },
      Display: {
        "Display Type": {
          value: "AMOLED",
        },
        "Screen Type": {
          value: "IPS",
        },
        "Screen Size": {
          value: "",
          derivedFrom: "screenSize",
        },
        Brightness: {
          value: "600 nits",
        },
      },
      Storage: {
        Type: {
          value: "SSD",
        },
        "Total Storage Capacity": {
          value: "",
          derivedFrom: "storage",
        },
      },
    },
  },
  {
    id: "25",
    category: "phone",
    brand: "Google",
    name: "Pixel 10 Pro XL",
    model: "Pixel 10 Pro XL",
    modelNumber: "GA10424-US",
    year: 2025,
    description:
      "Meet Pixel 10 Pro, the new standard for pro phones. Advanced AI with Gemini, unbelievable camera quality, impeccable design, and the next-gen Google Tensor G5 chip.",
    options: [
      {
        id: "1",
        sku: "15076855",
        price: 1259,
        salePrice: 1199,
        quantity: 0,
        attributes: {
          colour: "Porcelain",
          processor: "Snapdragon 8 Elite",
          memory: "16GB",
          storage: "128GB",
          screenSize: '6.8"',
          processorBrand: "Qualcomm",
        },
      },
      {
        id: "2",
        sku: "15067675",
        price: 1399,
        salePrice: 1249,
        quantity: 2,
        attributes: {
          colour: "Porcelain",
          processor: "Snapdragon 8 Elite",
          memory: "16GB",
          storage: "256GB",
          screenSize: '6.8"',
          processorBrand: "Qualcomm",
        },
      },
    ],
    images: [
      {
        url: "/products/google-pixel-10.jpg",
        order: 1,
        alt: "Google Pixel 10 Pro XL in Porcelain - Front view showing 6.8-inch OLED display",
      },
      {
        url: "/products/google-pixel-10-2.jpg",
        order: 2,
        alt: "Google Pixel 10 Pro XL - Rear view showing quad camera array with telephoto and ultrawide lenses",
      },
      {
        url: "/products/google-pixel-10-3.jpg",
        order: 3,
        alt: "Google Pixel 10 Pro XL - Side profile showing slim frame and power button",
      },
      {
        url: "/products/google-pixel-10-4.jpg",
        order: 4,
        alt: "Google Pixel 10 Pro XL - Angled view showing display and Porcelain finish",
      },
      {
        url: "/products/google-pixel-10-5.jpg",
        order: 5,
        alt: "Google Pixel 10 Pro XL - Camera system close-up showing lens array detail",
      },
      {
        url: "/products/google-pixel-10-6.jpg",
        order: 6,
        alt: "Google Pixel 10 Pro XL - Bottom edge showing USB-C port and speaker grille",
      },
    ],
    specifications: {
      Processor: {
        Model: {
          value: "",
          derivedFrom: "processor",
        },
        Brand: {
          value: "",
          derivedFrom: "processorBrand",
        },
      },
      Display: {
        "Display Type": {
          value: "OLED",
        },
        "Screen Type": {
          value: "IPS",
        },
        "Screen Size": {
          value: "",
          derivedFrom: "screenSize",
        },
        Brightness: {
          value: "3300 nits",
        },
        "Screen Resolution": {
          value: "1344x2992",
        },
        "Refresh Rate": {
          value: "120Hz",
        },
      },
      Camera: {
        "Intergrated Camera": {
          value: "Rear, Telephoto 1, Ultrawide, Front",
        },
        "Front-facing Camera": {
          value: "42 megapixels",
        },
        "Rear-facing Camera": {
          value: "50 megapixels",
        },
        "Telephoto Camera": {
          value: "48 megapixels",
        },
        "Ultrawide Camera": {
          value: "48 megapixels",
        },
        HDR: {
          value: "Yes",
        },
      },
      Storage: {
        Type: {
          value: "SSD",
        },
        "Total Storage Capacity": {
          value: "",
          derivedFrom: "storage",
        },
      },
    },
  },
];

export default products;
