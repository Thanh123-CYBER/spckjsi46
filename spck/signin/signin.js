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

const register_btn = document.getElementById("register_btn");
const password_register = document.getElementById("password_register");
const username_register = document.getElementById("username_register");
const email_register = document.getElementById("email_register")

register_btn.addEventListener("click", async function () {
    let username = username_register.value; // bắt buộc là email
    let password = password_register.value;
    let email = email_register.value;
    console.log(username);
    console.log(password);
    console.log(email);

    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await set(ref(database, "user/" + user.uid), {
                id: user.uid,
                username: username,
                password: password,
                email: email,
                // listNhatKy: [{
                //   id: "",
                //   name: "",
                //   createdTime: "",
                //   author: "id của user (user.uid)",
                //   content: ""
                // }]
            });

            alert("Tạo tài khoản thành công");
            window.location.href = "../Login/login.html"

        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMess = err.message;

            alert("Vui long dien day du thong tin");
        });
});

