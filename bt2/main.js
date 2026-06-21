// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
let getAllBtn = document.getElementById("getAllBtn")
getAllBtn.addEventListener("click", function () {
    get(ref(database, "users/")).then((snapShot) => {
        console.log(snapShot.val());
        console.log(Object.values(snapShot.val()));
        let input_email = document.getElementById("input_email")
        let input_password = document.getElementById("input_password")
        let input_name = document.getElementById("input_name")


        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", function () {
            formEdit.style.display = "flex";
            input_name_edit.value = users.name;
            input_email_edit.value = users.email;
            input_password_edit.value = users.password;
            saveProductBtn.addEventListener("click", function () {
                update(ref(database, `users/${users.id}`), {
                    name: input_name_edit.value,
                    email: input_email_edit.value,
                    password: input_password_edit.value,
                }).then(() => {
                    alert("Update thanh cong");
                });
            });
        });

        div.appendChild(editBtn);
    });
});
});

let delete_btn = document.getElementById("deleteBtn");

delete_btn.addEventListener("click", function () {
    alert("Xóa thành công");
});
 });
