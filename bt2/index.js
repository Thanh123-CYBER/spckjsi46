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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhvRsdkCqu3oNOJt01e9Wz-QWFF3G-bmg",
    authDomain: "bt2jsi46.firebaseapp.com",
    databaseURL: "https://bt2jsi46-default-rtdb.firebaseio.com",
    projectId: "bt2jsi46",
    storageBucket: "bt2jsi46.firebasestorage.app",
    messagingSenderId: "90798260940",
    appId: "1:90798260940:web:d530aaf0f2637738b93869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const addBtn = document.getElementById("add-btn");
let info = document.getElementById("div1")
let input_email = document.getElementById("input_email")
let input_password = document.getElementById("input_password")
let input_name = document.getElementById("input_name")
let button1 = document.getElementById("button1")
let button2 = document.createElement("button1")
const addBtn2 = document.querySelector('add-btn2');
console.log(addBtn);
document.addEventListener("DOMContentLoaded", function ()) {
    const addBtn = document.getElementById("add-btn");
} // Ensure ID matches HTML
if (addBtn) { }
addBtn.addEventListener("click", function () {
    let user_id = window.uuidv4();

    if (
        inputName.value.trim() === "" ||
        inputEmail.value.trim() === "" ||
        inputPassword.value.trim() === ""
    ) {
        alert("Có 1 nhất ô đang bị điền thiếu thông tin, vui lòng kiểm tra lại");
    } else {
        set(ref(database, "users/" + user_id), {
            id: user_id,
            name: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value,
        }).then(() => {
            alert("Nhap thanh cong");
            inputName.value = "";
            inputEmail.value = "";
            inputPassword.value = "";
            window.open("main.html")
        });
    }
});
