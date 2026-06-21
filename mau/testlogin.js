// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOtQpAt2Gxi_k4dcaJHJ0tkzNgkSNSpg",
  authDomain: "jsi45-5b100.firebaseapp.com",
  databaseURL: "https://jsi45-5b100-default-rtdb.firebaseio.com",
  projectId: "jsi45-5b100",
  storageBucket: "jsi45-5b100.firebasestorage.app",
  messagingSenderId: "26164554705",
  appId: "1:26164554705:web:4c46acc6e018d40bdd0ef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth()

let username_login = document.getElementById("username_input_login");
let password_login = document.getElementById("password_input_login");
let username_register = document.getElementById("username_input_register");
let password_register = document.getElementById("password_input_register");
let login_btn = document.getElementById("login_btn");
let register_btn = document.getElementById("register_btn");

// Đăng ký 1 tài khoản
register_btn.addEventListener("click", async function () {
  let username = username_register.value; // bắt buộc là email
  let password = password_register.value;

  await createUserWithEmailAndPassword(auth, username, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await set(ref(database, "user/" + user.uid), {
        id: user.uid,
        username: username,
        password: password,
        // listNhatKy: [{
        //   id: "",
        //   name: "",
        //   createdTime: "",
        //   author: "id của user (user.uid)",
        //   content: ""
        // }]
      });

      alert("Tạo tài khoản thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});

// Đăng nhập 1 tải khoản có sẵn
login_btn.addEventListener("click", function () {
  let username = username_login.value;
  let password = password_login.value;

  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      let date = new Date();
      update(ref(database, "user/" + user.uid), {
        lastLogin: date,
      }).then(() => {
        localStorage.setItem("name", username); // Lưu tên đăng nhập thành công vào localStorage
        localStorage.setItem("userID", user.uid)
        alert("Đăng nhập thành công");
        // Thực thi chuyển trang
        // window.location.href = "..."
        window.location.href = "../Home/home.html"
      });
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});

// let name = localStorage.getItem("name")
// if (name) {
//     window.location.href = "../Home/home.html"
// }
// Nếu đăng nhập thành công rồi thì mặc định về HOME