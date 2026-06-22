import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
    get,
    getDatabase,
    ref,
    update
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8UruXgvmgPAClQL4zylbs5NwTaEBK_Rs",
    authDomain: "spck1-jsi46.firebaseapp.com",
    databaseURL: "https://spck1-jsi46-default-rtdb.firebaseio.com",
    projectId: "spck1-jsi46",
    storageBucket: "spck1-jsi46.firebasestorage.app",
    messagingSenderId: "649556351324",
    appId: "1:649556351324:web:5357fe6b16b4375c08c999"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const email = localStorage.getItem("email");
const username = localStorage.getItem("username");
const userID = localStorage.getItem("userID");

if (!email || !username || !userID) {
    window.location.href = "../Login/login.html";
}

function loadWorks() {

    const todoList = document.getElementById("todoList");
    const progressList = document.getElementById("progressList");
    const doneList = document.getElementById("doneList");

    todoList.innerHTML = "";
    progressList.innerHTML = "";
    doneList.innerHTML = "";

    get(ref(database, "works/" + userID))
        .then((snapshot) => {

            if (snapshot.exists()) {

                snapshot.forEach((item) => {

                    const data = item.val();
                    const status = data.status || "todo";

                    const card = `
                    <div class="task-card">

                        <h4>${data.work}</h4>

                        <p>${data.description}</p>

                        <div class="task-footer">
                            <span class="task-date">
                                📅 ${data.date}
                            </span>

                            <span class="work-type">
                                ${data.type}
                            </span>
                        </div>

                        <div class="status-selector">

                            <label>
                                <input
                                    type="radio"
                                    name="status-${data.id}"
                                    ${status === "todo" ? "checked" : ""}
                                    onchange="updateStatus('${data.id}','todo')">
                                To Do
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="status-${data.id}"
                                    ${status === "progress" ? "checked" : ""}
                                    onchange="updateStatus('${data.id}','progress')">
                                In Progress
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="status-${data.id}"
                                    ${status === "done" ? "checked" : ""}
                                    onchange="updateStatus('${data.id}','done')">
                                Done
                            </label>

                        </div>

                    </div>
                    `;

                    if (status === "progress") {
                        progressList.innerHTML += card;
                    }
                    else if (status === "done") {
                        doneList.innerHTML += card;
                    }
                    else {
                        todoList.innerHTML += card;
                    }

                });

            }
if (todoList.innerHTML === "") {
    todoList.innerHTML = `
        <div class="empty-column">
            📝 Nothing To Do
        </div>
    `;
}

if (progressList.innerHTML === "") {
    progressList.innerHTML = `
        <div class="empty-column">
            ⚡ No Work In Progress
        </div>
    `;
}

if (doneList.innerHTML === "") {
    doneList.innerHTML = `
        <div class="empty-column">
            🏆 No Completed Works Yet
        </div>
    `;
}

        })
        .catch((error) => {
            console.log(error);
        });

}

window.updateStatus = function (workId, status) {

    update(
        ref(database, "works/" + userID + "/" + workId),
        {
            status: status
        }
    )
    .then(() => {
        loadWorks();
    })
    .catch((error) => {
        console.log(error);
    });

};

window.onload = function () {
    loadWorks();
};