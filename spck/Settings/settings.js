const avatarInput = document.getElementById("avatar");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveButton = document.getElementById("save");
const logoutButton = document.getElementById("logout-btn");
const defaultAvatar = "data:image/jpeg;base64,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";

avatarInput.addEventListener("change", () => {
  const file = avatarInput.files && avatarInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("profilePicture", String(reader.result || defaultAvatar));
  };
  reader.readAsDataURL(file);
});

saveButton.addEventListener("click", function () {
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue) {
    localStorage.setItem("username", usernameValue);
}

  if (passwordValue) {  
    localStorage.setItem("password", passwordValue);
  }

  if (!localStorage.getItem("profilePicture")) {
    localStorage.setItem("profilePicture", defaultAvatar);
  }

  alert("Saved");
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("email");
  localStorage.removeItem("username");
  localStorage.removeItem("userID");
  localStorage.removeItem("email");
});

