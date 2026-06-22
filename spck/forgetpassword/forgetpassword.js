const reset = document.getElementById("reset");
const email = document.getElementById("email");

reset.addEventListener("click", function (e) {

    e.preventDefault();

    const emailValue = email.value.trim();

    if (emailValue === "") {
        alert("Please enter your email first.");
        return;
    }

    if (!emailValue.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Sent");
});