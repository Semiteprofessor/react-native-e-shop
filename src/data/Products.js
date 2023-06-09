/** @format */

const productsData = [
  {
    id: 1,
    name: "COPORATE JACKET",
    imageUrl1: "https://i.postimg.cc/xTL0M5LR/jacket-3.jpg",
    imageUrl2: "https://i.postimg.cc/XY84DvHB/jacket-4.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Jacket",
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    price: 5000,
    initPrice: 7000,
    countInStock: 11,
    color: "brown",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 2,
    name: "MEN SHIRT",
    imageUrl1: "https://i.postimg.cc/Jh0V65HS/shirt-1.jpg",
    imageUrl2: "https://i.postimg.cc/g079fLvj/shirt-2.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirt",
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    price: 4000,
    initPrice: 6000,
    countInStock: 24,
    color: "brown",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 3,
    name: "JACKET",
    imageUrl1: "https://i.postimg.cc/sgy3cWcR/jacket-5.jpg",
    imageUrl2: "https://i.postimg.cc/ZR9mRxT6/jacket-6.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Jacket",
    brand: "Balenciaga",
    rating: 3.5,
    numReviews: 10,
    price: 8000,
    initPrice: 10000,
    countInStock: 4,
    color: "brown",
    size: "M",
    showcase: "NEW",
    sold: 0,
  },
  {
    id: 4,
    name: "SHIRT",
    imageUrl1: "https://i.postimg.cc/XJPPzM6C/clothes-3.jpg",
    imageUrl2: "https://i.postimg.cc/2jbj8r6g/clothes-4.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirt",
    brand: "Gucci",
    rating: 3.5,
    numReviews: 10,
    price: 6000,
    initPrice: 7000,
    countInStock: 20,
    color: "black",
    size: "M",
    showcase: "NEW",
    sold: 2,
  },
  {
    id: 5,
    name: "CASUAL",
    imageUrl1: "https://i.postimg.cc/SRWw2ZHY/shoe-2.jpg",
    imageUrl2: "https://i.postimg.cc/3xLzv0f1/shoe-2-1.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shoe",
    brand: "Prada",
    rating: 3.5,
    numReviews: 10,
    price: 28000,
    initPrice: 30000,
    countInStock: 5,
    color: "black",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 6,
    name: "WATCH",
    imageUrl1: "https://i.postimg.cc/mg66Dfh6/watch-3.jpg",
    imageUrl2: "https://i.postimg.cc/hGzZQyd4/watch-4.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shoe",
    brand: "Taguer",
    rating: 3.5,
    numReviews: 10,
    price: 280000,
    initPrice: 300000,
    countInStock: 5,
    color: "Gold",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 7,
    name: "APPLE WATCH",
    imageUrl1: "https://i.postimg.cc/WbTyYwQS/watch-1.jpg",
    imageUrl2: "https://i.postimg.cc/Dy6M9bhh/watch-2.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shoe",
    brand: "Apple",
    rating: 3.5,
    numReviews: 10,
    price: 300000,
    countInStock: 15,
    color: "Black",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 8,
    name: "PARTY WAER",
    imageUrl1: "https://i.postimg.cc/4NRGfcjh/party-wear-1.jpg",
    imageUrl2: "https://i.postimg.cc/c47SrHNk/party-wear-2.jpg",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shoe",
    brand: "Gucci",
    rating: 4,
    numReviews: 10,
    price: 30000,
    initPrice: 33000,
    countInStock: 5,
    color: "Pink",
    size: "M",
    showcase: "SALE",
    sold: 1,
  },
  {
    id: 9,
    name: "MEN JEAN",
    imageUrl1: "https://i.postimg.cc/B6D6RgV7/1-jeans-png-image.png",
    imageUrl2: "https://i.postimg.cc/B6D6RgV7/1-jeans-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    price: 3000,
    initPrice: 4500,
    countInStock: 11,
    color: "blue",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 10,
    name: "WOMEN HANDBAG",
    imageUrl1: "https://i.postimg.cc/g0Ht4FYg/1-red-women-bag-png-image.png",
    imageUrl2: "https://i.postimg.cc/g0Ht4FYg/1-red-women-bag-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 3.5,
    numReviews: 18,
    price: 5000,
    initPrice: 7000,
    countInStock: 5,
    color: "red",
    size: "L",
    showcase: "SALE",
    sold: 4,
  },
  {
    id: 11,
    name: "SONY CAMERA",
    imageUrl1: "https://i.postimg.cc/J7pVMJCp/1-video-camera-png-image.png",
    imageUrl2: "https://i.postimg.cc/J7pVMJCp/1-video-camera-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4,
    numReviews: 64,
    price: 45000,
    initPrice: 6000,
    countInStock: 0,
    color: "black",
    size: "L",
    sold: 16,
  },
  {
    id: 12,
    name: "JEAN",
    imageUrl1:
      "https://i.postimg.cc/BQJ6w2cN/156430-skinny-jeans-png-download-free.png",
    imageUrl2:
      "https://i.postimg.cc/BQJ6w2cN/156430-skinny-jeans-png-download-free.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 32,
    price: 3000,
    initPrice: 45000,
    countInStock: 20,
    color: "blue",
    size: "M",
    showcase: "15%",
    sold: 2,
  },
  {
    id: 13,
    name: "PURE LEADER WOMEN HANDBAG",
    imageUrl1:
      "https://i.postimg.cc/8CZ9NQqj/2-louis-vuitton-women-bag-png-image.png",
    imageUrl2:
      "https://i.postimg.cc/8CZ9NQqj/2-louis-vuitton-women-bag-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 2.5,
    numReviews: 40,
    price: 5000,
    initPrice: 7000,
    countInStock: 8,
    color: "Brown",
    size: "L",
    sold: 8,
  },
  {
    id: 14,
    name: "VIDEO CAMERA",
    imageUrl1: "https://i.postimg.cc/MHKC1ZV0/2-video-camera-png-image.png",
    imageUrl2: "https://i.postimg.cc/MHKC1ZV0/2-video-camera-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 5,
    numReviews: 50,
    price: 15000,
    initPrice: 18000,
    countInStock: 5,
    color: "Black",
    size: "M",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 15,
    name: "PROFESSIONAL VIDEO COVERAGE",
    imageUrl1:
      "https://i.postimg.cc/Gt7ZK0xW/22669-5-professional-video-camera-transparent-image.png",
    imageUrl2:
      "https://i.postimg.cc/Gt7ZK0xW/22669-5-professional-video-camera-transparent-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 5,
    numReviews: 16,
    price: 70000,
    initPrice: 85000,
    countInStock: 5,
    color: "Black",
    size: "M",
    sold: 40,
  },
  {
    id: 16,
    name: "CORPORATE GUY SKETCHERS",
    imageUrl1: "https://i.postimg.cc/W4GCKq76/3-running-shoes-png-image.png",
    imageUrl2: "https://i.postimg.cc/W4GCKq76/3-running-shoes-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 3.5,
    numReviews: 30,
    price: 8000,
    initPrice: 10000,
    countInStock: 13,
    color: "White",
    size: "43",
    showcase: "NEW",
    sold: 1,
  },
  {
    id: 17,
    name: "MEN SKETCHERS",
    imageUrl1:
      "https://i.postimg.cc/brBBbxz8/30-asics-running-shoes-png-image.png",
    imageUrl2:
      "https://i.postimg.cc/brBBbxz8/30-asics-running-shoes-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 23,
    price: 10000,
    initPrice: 12000,
    countInStock: 3,
    color: "Blue",
    size: "42",
    showcase: "NEW",
    sold: 0,
  },
  {
    id: 18,
    name: "NICE WOMEN HANDBAG",
    imageUrl1: "https://i.postimg.cc/CxDQBn9T/4-women-bag-png-image-1.png",
    imageUrl2: "https://i.postimg.cc/CxDQBn9T/4-women-bag-png-image-1.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 25,
    price: 20000,
    initPrice: 22000,
    countInStock: 7,
    color: "Brown",
    size: "L",
  },
  {
    id: 19,
    name: "WOMEN JEAN",
    imageUrl1: "https://i.postimg.cc/Dy5ZVmxh/5-jeans-png-image.png",
    imageUrl2: "https://i.postimg.cc/Dy5ZVmxh/5-jeans-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4,
    numReviews: 101,
    price: 8000,
    initPrice: 10000,
    countInStock: 6,
    color: "Blue",
    size: "M",
    sold: 9,
  },
  {
    id: 20,
    name: "BRAND NEW SKETCHERS",
    imageUrl1: "https://i.postimg.cc/Wz3yhWcX/5-running-shoes-png-image.png",
    imageUrl2: "https://i.postimg.cc/Wz3yhWcX/5-running-shoes-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 3,
    numReviews: 104,
    price: 15000,
    initPrice: 18000,
    countInStock: 8,
    color: "Cyan",
    size: "44",
    showcase: "SALE",
    sold: 1,
  },
  {
    id: 21,
    name: "QUALITY VIDEO CAMERA",
    imageUrl1: "https://i.postimg.cc/tC70TTXp/5-video-camera-png-image.png",
    imageUrl2: "https://i.postimg.cc/tC70TTXp/5-video-camera-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 48,
    price: 120000,
    initPrice: 150000,
    countInStock: 4,
    color: "Black",
    size: "M",
    showcase: "15%",
  },
  {
    id: 22,
    name: "CORPORATE MEN JEAN",
    imageUrl1: "https://i.postimg.cc/cLbLH2q5/6-jeans-png-image.png",
    imageUrl2: "https://i.postimg.cc/cLbLH2q5/6-jeans-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 3,
    numReviews: 100,
    price: 5000,
    initPrice: 7000,
    countInStock: 8,
    color: "Blue",
    size: "XL",
    showcase: "SALE",
    sold: 7,
  },
  {
    id: 23,
    name: "HANDBAG",
    imageUrl1: "https://i.postimg.cc/C1wXVMPy/6-women-bag-png-image.png",
    imageUrl2: "https://i.postimg.cc/C1wXVMPy/6-women-bag-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4.5,
    numReviews: 72,
    price: 20000,
    initPrice: 25000,
    countInStock: 5,
    color: "Red",
    size: "L",
    showcase: "SALE",
    sold: 5,
  },
  {
    id: 24,
    name: "QULAITY MEN SKETCHERS",
    imageUrl1: "https://i.postimg.cc/YqP5mH9g/8-running-shoes-png-image.png",
    imageUrl2: "https://i.postimg.cc/YqP5mH9g/8-running-shoes-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 5,
    numReviews: 51,
    price: 10000,
    initPrice: 12000,
    countInStock: 12,
    color: "Mix",
    size: "45",
    sold: 14,
  },
  {
    id: 25,
    name: "WOMEN OUTDOOR SLIPPER",
    imageUrl1:
      "https://i.postimg.cc/cJPCDjX8/73169-outdoor-pink-sandal-black-shoe-free-png-hq.png",
    imageUrl2:
      "https://i.postimg.cc/cJPCDjX8/73169-outdoor-pink-sandal-black-shoe-free-png-hq.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 1.5,
    numReviews: 14,
    price: 2000,
    initPrice: 3000,
    countInStock: 30,
    color: "Black",
    size: "38",
    showcase: "NEW",
    sold: 3,
  },
  {
    id: 26,
    name: "WOMEN LEADER HANDBAG",
    imageUrl1: "https://i.postimg.cc/dtgfVjHj/7-women-bag-png-image.png",
    imageUrl2: "https://i.postimg.cc/dtgfVjHj/7-women-bag-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 2.5,
    numReviews: 1024,
    price: 20000,
    initPrice: 22000,
    countInStock: 10,
    color: "Black",
    size: "L",
    sold: 30,
  },
  {
    id: 27,
    name: "SONY VIDEO CAMERA",
    imageUrl1: "https://i.postimg.cc/qvPHWTH0/8-video-camera-png-image.png",
    imageUrl2: "https://i.postimg.cc/qvPHWTH0/8-video-camera-png-image.png",
    description: "DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL",
    category: "Shirts",
    brand: "Nike",
    rating: 4,
    numReviews: 10,
    price: 65000,
    initPrice: 68000,
    countInStock: 10,
    color: "Black",
    size: "L",
    sold: 0,
  },
];

module.exports = productsData;
