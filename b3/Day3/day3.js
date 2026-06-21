let container = document.getElementsByClassName("container");
container[0].innerText = "hello";
container[0].innerHTML = "<h1>Nguyen Danh Phuong</h1>";

let string =
  "<h1>Nguyen Danh Phuong</h1>" +
  `<a href="https://www.youtube.com/">Chuyen sang trang youtube</a>`;
// container[0].innerHTML = string

// Dùng JS để thêm 1 nội dung mới vào trong HTML:
// 1.  document.body.appendChild(newElement): Cho phép thêm thẻ vào trong body
// 2.  thẻ_cha.appendChild(thẻ_con)

// tạo 1 thẻ mới: document.createElement("tên_thẻ")
// Note: tên_thẻ: h1, h2, div,...

let uElement = document.createElement("u");
uElement.innerText = "Đây là nội dung mới";
// document.body.appendChild(uElement) // thêm vào body

// yêu cầu thêm thẻ uElement mới dc tạo vào trong thẻ container
container[0].appendChild(uElement);

let info = document.getElementsByClassName("information");
// let h1 = document.createElement("h1");
// h1.innerText = "Thanh"
// info[0].appendChild(h1);
// let p = document.createElement("p");
// p.innerText = "Thanh Hoa";
// info[0].appendChild(p);
// let a = document.createElement("a");
// a.href = "https://www.youtube.com/";
// a.innerText ="Youtube"
// info[0].appendChild(a);

let name = "Thanh";
let address = "Thanh Hoa";
let link = "https://www.youtube.com/";

let dataUser = [
  {
    name: "Thanh",
    address: "Thanh Hoa",
    link: "https://www.youtube.com/",
  },
  {
    name: "Phuong",
    address: "Ha noi",
    link: "https://github.com/",
  },
];

// //Step1:  Tạo ra 1 thẻ card mới
// let card1 = document.createElement("div");
// card1.className = "card";
// // card1.classList.add("card")
// // Step2: card đó innerHTML những thẻ h1, p, a được tạo như ví dụ trên
// // Step3 Nội dung cho các thẻ h1, p, a phải được lấy dữ liệu thông qua dataUser
// card1.innerHTML = `
// <h1 class="titleName">${dataUser[0].name}</h1>
// <p>${dataUser[0].address}</p>
// <a href="${dataUser[0].link}">Youtube</a>
// `;
// // infor[0].appendChild(card)
// info[0].appendChild(card1);

// let card2 = document.createElement("div");
// card2.className = "card";
// // card1.classList.add("card")
// // Step2: card đó innerHTML những thẻ h1, p, a được tạo như ví dụ trên
// // Step3 Nội dung cho các thẻ h1, p, a phải được lấy dữ liệu thông qua dataUser
// card2.innerHTML = `
// <h1 class="titleName">${dataUser[1].name}</h1>
// <p>${dataUser[1].address}</p>
// <a href="${dataUser[1].link}">Youtube</a>
// `;
// // infor[0].appendChild(card)
// info[0].appendChild(card2);

// Dùng vòng for:
for (let i = 0; i < dataUser.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h1 class="titleName">${dataUser[i].name}</h1>
        <p>${dataUser[i].address}</p>
        <a href="${dataUser[i].link}">Youtube</a>
    `;
    info[0].appendChild(card);
}
