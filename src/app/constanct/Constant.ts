type Fruit = {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  currentPrice: number;
  markPrice: number;
  soldBy: string;
};

export const fruits: Fruit[] = [
  {
    id: 1,
    name: "Apple",
    description: "Sweet red fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
    location: "USA",
    currentPrice: 230.311,
    markPrice: 304.29,
    soldBy: "Alice Johnson",
  },
  {
    id: 2,
    name: "Banana",
    description: "Yellow curved fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614645/Frame_6584_njee8c.png",
    location: "Ecuador",
    currentPrice: 109.311,
    markPrice: 111.295,
    soldBy: "Michael Smith",
  },
  {
    id: 3,
    name: "Eggs",
    description: "Citrus vitamin C",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614646/Rectangle_109_kicwx3.png",
    location: "Spain",
    currentPrice: 122.311,
    markPrice: 212.298,
    soldBy: "Sarah Williams",
  },
  {
    id: 4,
    name: "Peal",
    description: "Juicy tropical fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614256/Rectangle_105_txkiwm.png",
    location: "India",
    currentPrice: 100.311,
    markPrice: 304.295,
    soldBy: "David Brown",
  },
  {
    id: 5,
    name: "Pineapple",
    description: "Spiky sweet tropical",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614645/Frame_6593_kxrdrj.png",
    location: "Philippines",
    currentPrice: 411.311,
    markPrice: 610.29,
    soldBy: "Emily Davis",
  },
  {
    id: 6,
    name: "Strawberry",
    description: "Small juicy berry",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614255/Rectangle_107_d3mpi5.png",
    location: "France",
    currentPrice: 544.311,
    markPrice: 523.298,
    soldBy: "James Wilson",
  },
  {
    id: 1,
    name: "Apple",
    description: "Sweet red fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
    location: "USA",
    currentPrice: 230.311,
    markPrice: 304.29,
    soldBy: "Alice Johnson",
  },
  {
    id: 2,
    name: "pawpaw",
    description: "Yellow curved fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614645/Frame_6584_njee8c.png",
    location: "Ecuador",
    currentPrice: 109.311,
    markPrice: 111.295,
    soldBy: "Michael Smith",
  },
  {
    id: 3,
    name: "Orange",
    description: "Citrus vitamin C",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614646/Rectangle_109_kicwx3.png",
    location: "Spain",
    currentPrice: 122.311,
    markPrice: 212.298,
    soldBy: "Sarah Williams",
  },
  {
    id: 4,
    name: "Mango",
    description: "Juicy tropical fruit",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
    location: "India",
    currentPrice: 100.311,
    markPrice: 304.295,
    soldBy: "David Brown",
  },
  {
    id: 5,
    name: "Pineapple",
    description: "Spiky sweet tropical",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
    location: "Philippines",
    currentPrice: 411.311,
    markPrice: 610.29,
    soldBy: "Emily Davis",
  },
  {
    id: 6,
    name: "Strawberry",
    description: "Small juicy berry",
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
    location: "France",
    currentPrice: 544.311,
    markPrice: 523.298,
    soldBy: "James Wilson",
  },
];

interface Tags {
  title: string;
  content: string;
}
export const tags: Tags[] = [
  {
    title: "Description",
    content:
      "The fruit is a well known large drupe, but shows a great variation in shape and size. It contains a thick yellow pulp, single seed and thick yellowish – red skin when ripe. The seed is solitary, ovoid or oblong, encased in a hard, compressed fibrous endocarp.",
  },
  {
    title: "Delivery and Payment Terms",
    content:
      "Account, Cash On Delivery (COD), Cash on Pickup (COP), IPAY-T(I Pay Today), Market Credit Service",
  },
  {
    title: "Packaging option",
    content: "Chep Pallet, plain pallet, loscam pallet, Sam",
  },
];

type FruitImages = {
  image: string;
};
export const fruitImages: FruitImages[] = [
  {
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614256/Rectangle_105_txkiwm.png",
  },
  {
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739290324/Rectangle_108_uparit.png",
  },
  {
    image:
      "https://res.cloudinary.com/dbrub0d6r/image/upload/v1739614255/Rectangle_107_d3mpi5.png",
  },
];
