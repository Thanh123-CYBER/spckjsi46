// Import the functions you need from the SDKs you need
import {
  get,
  getDatabase,
  set,
  ref,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const products = [
  {
    name: "Gaming Mouse",
    price: 450000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "Chuột gaming RGB với độ nhạy cao dành cho game thủ.",
    quantity: 15,
  },
  {
    name: "Mechanical Keyboard",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    description: "Bàn phím cơ switch blue với led nhiều màu.",
    quantity: 8,
  },
  {
    name: "Wireless Headphone",
    price: 890000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Tai nghe không dây chống ồn và pin sử dụng lâu.",
    quantity: 20,
  },
  {
    name: "4K Monitor",
    price: 5600000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description: "Màn hình 4K kích thước 27 inch dành cho designer.",
    quantity: 5,
  },
  {
    name: "Laptop Stand",
    price: 320000,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    description: "Giá đỡ laptop bằng nhôm chắc chắn và hiện đại.",
    quantity: 30,
  },
];

products.forEach((product) => {
  let user_id = window.uuidv4();
  product.id = user_id;
  set(ref(db, "products/" + user_id), product);
});
