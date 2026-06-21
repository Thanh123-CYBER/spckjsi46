// Vòng for: lặp, để thực hiện những hành vi xảy ra lặp đi lặp lại
// for(khởi tạo; điều kiện; sự thay đổi) {}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let list_food = ["bun cha", "banh mi", "hu tieu"];
console.log(list_food[0]);
console.log(list_food[1]);
console.log(list_food[2]);

for (let i = 0; i < list_food.length; i++) {
  if (list_food[i] == "bun cha") {
    console.log(list_food[i]);
  }
}

let person = [
  {
    name: "Phuong",
    age: 20,
  },
  {
    name: "Danh",
    age: 30,
  },
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i].age);
}

let list_product = [
  { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
  { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
  { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
  { name: "Vase", price: 16, availability: true, id: "4", category: "bag" },
  { name: "Flower", price: 26, availability: true, id: "5", category: "shoes" },
  {
    name: "Bedsheet",
    price: 49,
    availability: true,
    id: "6",
    category: "shirt",
  },
  { name: "Mat", price: 69, availability: false, id: "7", category: "shirt" },
  { name: "Teapot", price: 13, availability: true, id: "8", category: "bag" },
  {
    name: "Large Bookshelf",
    price: 88,
    availability: true,
    id: "9",
    category: "shirt",
  },
  {
    name: "Small Bookshelf",
    price: 75,
    availability: true,
    id: "10",
    category: "bag",
  },
  {
    name: "Wardrobe",
    price: 82,
    availability: false,
    id: "11",
    category: "shirt",
  },
  { name: "Carpet", price: 45, availability: false, id: "12", category: "bag" },
];

for (let i = 0; i < list_product.length; i++) {
  if (list_product[i].price > 50) {
    console.log(list_product[i].name);
  }
}

// 9. Function: chức năng => thực thi 1 nhiệm vụ hoặc 1 khối câu lệnh nào đấy, tái sử dụng lại hàm

let a = 3;
let b = 4;
let c = 5;

let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log("S = ", s);

function tinhDienTamGiac(a, b, c) {
  let p = (a + b + c) / 2;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log("S = ", s);
}

tinhDienTamGiac(3, 4, 5) // Goi ham 
tinhDienTamGiac(5, 8, 9)

// Function ở dạng return
// Tạo 1 hàm cho phép người dùng nhập giá trị 2 số bất kỳ và 1 phép tính bất kỳ
// return về kết quả dựa vào những tham số do người dùng định nghĩa

function printInformation() {
    // console.log("Danh Phuong dzai");
    
    return "Danh Phuong dzai"
}

// Khi function có return thì lúc ta gọi hàm chính là lúc ta nhận dc giá trị trả về trong return
printInformation() // "Danh Phuong dzai"

console.log(printInformation()) // console.log("Danh Phuong dzai")


// function count(a, b, phepTinh) {
//     if (phepTinh == "cộng") {
//         return a + b
//     } else if (phepTinh == "trừ") {
//         return a - b
//     } else if (phepTinh == "nhân") {
//         return a * b
//     } else if (phepTinh == "chia") {
//         return a / b
//     }

//     return "phép tính chưa tồn tại"
// };
// console.log("Result: ", count(10, 20, "cộng"));
