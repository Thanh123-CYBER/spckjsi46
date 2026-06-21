// I.Khai bao bien
// 1. Khai bao bien : let, const 
// 2. Cach dung : let  + ten bien = gia tri nao do (String, number, boolean)
// 3. Tu khoa let cho minh thay doi gia tri ban dau cua bien
// 4 . Khong the thay doi lai gia tri ban dau cua bien
let name = "Lien Thanh";
name = "Sigma";
name = "123";
const address = "Tay Ho";
//address = "Thanh Xuan"; // Gan lai gia tri
console.log("My name is: " + name);
console.log("My address is: " + address);
// Khong nen vi pham khi khai bao bien
// Khong duoc khai bao bien la so , ki tu dac biet
// ten bien phai co y nghia
// CamelCase : Viet hoa chu cai dau tien cua tu thu 2 tro di :myNameis
// SnakeCase: Dung dau "_" ngan cach giua cac tu trong bien : my_name_is
// II.Cac kieu du lieu trong JS
//string: 1 chuoi chua cac ki tu duoc de trong ngoac kep "", '',``.
//number: chua so : VD : 1, 2 , 3,..
//Boolean: true/false
//object :
//let person = {
//     name : "Lien Thanh",
//     age : 20,
//     address : "Tay Ho"
// }
//Array : let listfood = [1,2,3,4,5] , ["Banh mi","bun cha"]
//III. Phep toan trong JS
// +,-,*,/,%
//Dau :  ** => 2**3
console.log(2**3);
// Dau can bac 2 :


let n = 6;
let result = n*(n-1)*(n-2)/2;
console.log(result);
let a = 10; 
let b = 15;
let c = 20;
let d = 25;
console.log((a+b)*(b+c)*(c+d)*(a+d));
//IV.Cac phep so sanh:
// > , < , >= , <= , == , === , != 
//Dieu kien so sanh : && (Ca hai), || (1 trong hai)
//VD: let check = "10" == 10; // true
//VD: let check1 = "10" === 10; // false
//V.Cau dieu kien if/else : Dung de thuc thi 1 hanh dong hoac 1 dieu kien nao do do chung ta de ra
/*
 if (Dieu kien 1) {
 code chay khi dieu kien 1 dung
 } else if (Dieu kien 2 ) {
    code chay o day khi dieu kien 2 dung , dieu kien 1 sai
    } else {
        code khi ko thoa man dieu kien tren
    }
*/
/*let point = 3;
if (point >= 9 && point <= 10) {
    console.log("A+");
} else if (point >= 8 && point < 10) {
    console.log("A");
} else if (point >= 7 && point < 10) {
    console.log("B");
} else if (point >= 6 && point < 10) {
        console.log("C");
    }
else if (point >= 5 && point < 10) {
    console.log("D");
} else if (point < 5 && point >= 10) {
    console.log("E");
} else {
    console.log("-1");
} */
//VI Doi tuong 
//Du lieu dung de luu gia tri o dang key va value
//Truy cap vao cac gia tri cua thuoc tinh:  
// CT: ten_object.ten_thuoc_tinh
//Thay doi gia tri cua thuoc tinh : ten_object.ten_thuoc_tinh = new_value
//Them 1 cap key va value moi   : ten_object.new_key = new_value
//Xoa 1 cap key va value : del ten_object["ten_thuoc_tinh"]
//VII. Mang (Array)
//Chua cac gia tri va ngan cach nhau boi dau ","
let listfood = ["Banh mi", "Bun cha", "Pho"];
//                 0          1         2
//Cac gia tri trong listfood se co 1 index rieng cua chung:
// 0 <= index < chieu dai cua mang
//Chieu dai cua mang: ten_mang.length
//Truy cap vao gia tri : ten_mang[index]
//Them vao vi tri cuoi cua mang: ten_mang.push(new_value)                                   