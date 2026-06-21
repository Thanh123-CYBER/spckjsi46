// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  get,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8UruXgvmgPAClQL4zylbs5NwTaEBK_Rs",
  authDomain: "spck1-jsi46.firebaseapp.com",
  databaseURL: "https://spck1-jsi46-default-rtdb.firebaseio.com",
  projectId: "spck1-jsi46",
  storageBucket: "spck1-jsi46.firebasestorage.app",
  messagingSenderId: "649556351324",
  appId: "1:649556351324:web:5357fe6b16b4375c08c999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


// Initialize Firebase

const emailInput = document.getElementById("email");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
loginBtn.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  console.log(emailValue)
  console.log(passwordValue)


  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      const user = userCredential.user;
      let date = new Date();
      update(ref(database, "user/" + user.uid), {
        lastLogin: date,
      }).then(() => {
        get(ref(database, "user/" + user.uid)).then((snapshot) => {
          const userData = snapshot.val() || {};
          localStorage.setItem("email", emailValue); // Lưu tên đăng nhập thành công vào localStorage
          localStorage.setItem("username", userData.username || emailValue);
          localStorage.setItem("userID", user.uid)
          alert("Đăng nhập thành công");
          // Thực thi chuyển trang
          // window.location.href = "..."
          window.location.href = "../menu/index.html"
        });
      });
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert("Vui long dien day du thong tin");
    });
});

// let name = localStorage.getItem("name")
// if (name) {
//     window.location.href = "../Home/home.html"
// }
// Nếu đăng nhập thành công rồi thì mặc định về HOME
