import {
  get,
  getDatabase,
  set,
  ref,
  remove
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8UruXgvmgPAClQL4zylbs5NwTaEBK_Rs",
  authDomain: "spck1-jsi46.firebaseapp.com",
  projectId: "spck1-jsi46",
  storageBucket: "spck1-jsi46.firebasestorage.app",
  messagingSenderId: "649556351324",
  appId: "1:649556351324:web:5357fe6b16b4375c08c999"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");

let input_work = document.getElementById("input_work");
let input_description = document.getElementById("input_description");
let input_url = document.getElementById("input_url");
let input_date = document.getElementById("input_date");

const email  = localStorage.getItem("email");
const username  = localStorage.getItem("username");
const userID  = localStorage.getItem("userID");
console.log(userID)
const checkCurrentLogin  = email && username && userID; //Check xem 3 cai nay co ton tai ko
if (!checkCurrentLogin){
       window.location.href = "../Login/login.html"

}
const welcomeUser =
  document.getElementById("welcomeUser");

const profileAvatar =
  document.getElementById("profileAvatar");
welcomeUser.textContent =
  "Welcome, " + username;


function createWorkId() {
  return "work_" + Date.now();
}

function loadWorks() {

  get(ref(database, "works/" + userID)) // lay work theo userid trong database
    .then(function (snapshot) {

      let workList =
        document.getElementById("workList");

      workList.innerHTML = "";

      if (snapshot.exists()) {

        snapshot.forEach(function (item) {

          let data = item.val();
        // Hien cong viec ra ngoai html
          workList.innerHTML += ` 
        <div class="work_card">

          <div class="card_header">

            <h3>${data.work}</h3>

            


          </div>

          <div class="card_description">
            ${data.description}
          </div>

          <div class="card_footer">

            <a href="${data.url}"
            target="_blank">
              Image
            </a>

            <span>
              ${data.date}
            </span>

          </div>
          <button
              class="delete_work"
              onclick="deleteWork('${data.id}')">
              Delete
            </button>
            <button
            class="update-btn"
            onclick="editWork('$data.id")">
            Edit
            </button>
          <input type="checkbox" class="checkbox">

        </div>
        `;

        });

      } else {

        workList.innerHTML =
          "Không có công việc";

      }

    })
    .catch(function (error) {
      console.log(error);
    });

}

window.deleteWork = function (workId) {

  let check =
    confirm("Delete this work?");

  if (check) {

    remove(
      ref(
        database,
        "works/" +
        userID +
        "/" +
        workId
      )
    )
      .then(function () {

        alert("Deleted");

        loadWorks();

      })
      .catch(function (error) {

        console.log(error);

      });

  }

};



addBtn.addEventListener("click", function () {

  if (
    input_work.value.trim() == "" ||
    input_description.value.trim() == "" ||
    input_url.value.trim() == "" ||
    input_date.value.trim() == ""
  ) {

    alert("Vui lòng nhập đủ thông tin");
    return;

  }

  let work_id = createWorkId();

  let workData = {
    id: work_id,
    work: input_work.value,
    description: input_description.value,
    url: input_url.value,
    date: input_date.value,
    username: username,
    userId: userID,
  };

  set(
    ref(
      database,
      "works/" +
      userID +
      "/" +
      work_id
    ),
    workData
  )
    .then(function () {

      alert("Thêm thành công");

      input_work.value = "";
      input_description.value = "";
      input_url.value = "";
      input_date.value = "";

      loadWorks();

    })
    .catch(function (error) {

      console.log(error);

    });

});

deleteBtn.addEventListener("click", function () {

  let check =
    confirm(
      "Xóa tất cả công việc?"
    );

  if (check) {

    remove(
      ref(
        database,
        "works/" +
        userID
      )
    )
      .then(function () {

        document.getElementById(
          "workList"
        ).innerHTML =
          "Không có công việc";

        alert(
          "Đã xóa tất cả"
        );

      })
      .catch(function (error) {

        console.log(error);

      });

  }

});

window.onload = function () { //khi trang duoc load , goi ham loadworks

  loadWorks();

};