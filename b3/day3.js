let container = document.getElementsByClassName("container")
console.log(container);
container[0].innerText = "Hello"
container[0].innerHTML = "<h1>Hello</h1>"
let string ="<h1>Nguyen Danh Phuong</h1>" + `<a href="https://www.youtube.com/">Chuyen trang sang youtube</a>`;
container[0].innerHTML = string;
//dung JS de them 1 noi dung moi vao trong html
//document.body.appendChild(NewElement) : cho phep them the vao trong body
//the_Cha.appendChild(the_Con)

//tao 1 the moi: document.createElement("ten_the_moi")
//note: ten_the : h1,h2,div...

/*let uElement = document.createElement("u");
uElement.innerText = "1 the moi ";
document.body.appendChild(uElement);
container[0].appendChild(uElement);
let info = document.getElementsByClassName("information");
let h1 = document.createElement("h1");
h1.innerText = "Thanh"
info[0].appendChild(h1);
let p = document.createElement("p");
p.innerText = "Thanh Hoa";
info[0].appendChild(p);
let a = document.createElement("a");
a.href = "https://www.youtube.com/";
a.innerText ="Youtube"
info[0].appendChild(a);*/

let info = document.getelem