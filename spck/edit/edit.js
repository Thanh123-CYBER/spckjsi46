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
const email  = localStorage.getItem("email");
const username  = localStorage.getItem("username");
const userID  = localStorage.getItem("userID");
console.log(userID)
const checkCurrentLogin  = email && username && userID; //Check xem 3 cai nay co ton tai ko
if (!checkCurrentLogin){
       window.location.href = "../Login/login.html"

}