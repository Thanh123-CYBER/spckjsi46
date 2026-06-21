//function doSomething (){
     //console.log("Hello World")
//}
//arrow function : Ten bien ~ Ten function
//const doSomething = (b) => console.log("dksadlkasl" + b)
   // console.log ("Arrow function here");

//doSomething()//Goi ham
let foods = [
  {
    name: "Bun cha",
    type: "Đồ nước",
  },
  {
    name: "Cơm rang",
    type: "Đồ khô",
  },
  {
    name: "Bánh cuốn",
    type: "Đồ nước",
  },
  {
    name: "Phở",
    type: "Đồ nước",
  },
  {
    name: "Bánh tôm",
    type: "Đồ khô",
  },
];
//output : stt.Ten do an - type
// for (let i = 0;i <foods.length;i++){
    
//     console.log((i + 1)+foods[i].name + "-"+ foods[i].type)
//     console.log (`${ + 1 }.${foods[i].name}- ${foods[i].type}`)
// }
//     //for each: duyet mang
// foods.forEach((food,index)=> {
//     console.log(`${index + 1}.${food.name}-${food.type}`)
// })
//Cach 1
// let newArray = []//Chua nhung gia tri co type la do nuoc
// for (let i = 0; i < foods.length; i++) {
//     if (foods[i].type === "Đồ khô"){
//         newArray.push(foods[i])
//     }
   
    
//}
//Cach 2
// console.log(newArray);
// let newArray = foods.filter(food=> food.type ==="Đồ khô")
// Map:Tao ra 1 mang dua theo nguyen tac ma ta de ra
//Cach 1
// let numbers = [1, 2, 8, 34, 132]
// let newArray = []
// for (let i =0;i<numbers.length;i++){
//    numbers[i]= numbers[i] + 2
// }
// console.log (numbers)
//Cach 2
let newNumbers = numbers.map(n =>n + 2)
console.log(newNumbers);
//Concat:Gop 2 mang lai voi nhau
let finalArray = foods.concat(numbers)
console.log(finalArray)