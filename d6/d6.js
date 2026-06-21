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
  apiKey: "AIzaSyCHNb3aysAFzuH1iDg3OlHr5S8SX-R-wv4",
  authDomain: "jsi46-nct-b8959.firebaseapp.com",
  databaseURL: "https://jsi46-nct-b8959-default-rtdb.firebaseio.com",
  projectId: "jsi46-nct-b8959",
  storageBucket: "jsi46-nct-b8959.firebasestorage.app",
  messagingSenderId: "65349933154",
  appId: "1:65349933154:web:b65525e5566a8f7452193b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Kết nối với firebase

let inputImage = document.getElementById("input_image");
let inputName = document.getElementById("input_name");
let inputDescription = document.getElementById("input_description");
let inputPrice = document.getElementById("input_price");
let addBtn = document.getElementById("addBtn");

let formEdit = document.getElementsByClassName("formEdit")[0];
let saveProductBtn = document.getElementById("saveBtn");
let input_name_edit = document.getElementById("input_name_edit");
let input_description_edit = document.getElementById("input_description_edit");
let input_price_edit = document.getElementById("input_price_edit");
let input_image_edit = document.getElementById("input_image_edit");

addBtn.addEventListener("click", function () {
  let user_id = window.uuidv4();

  if (
    inputName.value.trim() === "" ||
    inputImage.value.trim() === "" ||
    inputDescription.value.trim() === "" ||
    inputPrice.value.trim() === ""
  ) {
    alert("Có 1 nhất ô đang bị điền thiếu thông tin, vui lòng kiểm tra lại");
  } else {
    set(ref(database, "users/" + user_id), {
      id: user_id,
      name: inputName.value,
      image: inputImage.value,
      description: inputDescription.value,
      price: inputPrice.value,
    }).then(() => {
      alert("Nhap thanh cong");
      inputName.value = "";
      inputImage.value = "";
      inputDescription.value = "";
      inputPrice.value = "";
    });
  }
});

let user_information_container =
  document.getElementsByClassName("user_informations")[0];

let getAllBtn = document.getElementById("getAllBtn");
getAllBtn.addEventListener("click", function () {
  get(ref(database, "users/")).then((snapShot) => {
    console.log(snapShot.val());
    console.log(Object.values(snapShot.val()));

    Object.values(snapShot.val()).forEach((users) => {
      let div = document.createElement("div");
      div.className = "user_card";
      div.innerHTML = `
          <img
          src="${users.image}"
          alt=""
          class="user_image"
        />
        <h2 class="user_name">${users.name}</h2>
        <p class="user_price">${users.price}</p>
        <div class="user_description">
          ${users.description}
        </div>
        `;

      // detele
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", function () {
        remove(ref(database, "users/" + users.id)).then(() => {
          alert("Delete thanh cong");
        });
      });

      div.appendChild(deleteBtn);
      user_information_container.appendChild(div);

      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", function () {
        formEdit.style.display = "flex";
        input_name_edit.value = users.name;
        input_description_edit.value = users.description;
        input_price_edit.value = users.price;
        input_image_edit.value = users.image;

        // Save product after edit
        saveProductBtn.addEventListener("click", function () {
          update(ref(database, `users/${users.id}`), {
            name: input_name_edit.value,
            description: input_description_edit.value,
            price: input_price_edit.value,
            image: input_image_edit.value,
          }).then(() => {
            alert("Update thanh cong");
          });
        });
      });

      div.appendChild(editBtn);
    });

    // Hiện dữ liệu ra ngoài HTML,
    // cụ thể là hiện chúng ở trong div có class là user_information
  });
});

// let delete_btn = document.getElementById("deleteBtn");

// delete_btn.addEventListener("click", function () {
//   remove(ref(database, `users/user1`)).then(function () {
//     alert("Xóa thành công");
//   });
// });

let update_btn = document.getElementById("updateBtn");
update_btn.addEventListener("click", function () {
  update(ref(database, `users/user2`), {
    image: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg",
    name: "Anh 1",
    price: 300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque voluptatibus maiores quo debitis culpa, quidem reiciendis iusto modi id sint, ipsa animi ullam voluptas dignissimos a suscipit pariatur deserunt.",
  }).then(() => {
    alert("Update thanh cong");
  });
});

/**
 * 
 * update_button.addEventListener("click", function () {
  update(ref(database, `user/11434b7a-20f0-451a-a80a-63a6df635347`), {
    price: 300,
  }).then(() => {
    alert("Update thanh cong");
  });
});


delete_button.addEventListener("click", function () {
  remove(ref(database, `student/${username.value}`)).then(function () {
    alert("Xóa thành công");
  });
});
 */