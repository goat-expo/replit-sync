// Replace this with your PIN
const CORRECT_PIN = "5278";

function handleCredentialResponse(response) {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("pin-section").classList.remove("hidden");
}

function verifyPIN() {
  const inputPIN = document.getElementById("pin-input").value;
  const error = document.getElementById("pin-error");
  if (inputPIN === CORRECT_PIN) {
    document.getElementById("pin-section").classList.add("hidden");
    document.getElementById("todo-app").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect PIN. Try again.";
  }
}

function addTask(type) {
  const inputId = `${type}-input`;
  const listId = `${type}-tasks`;
  const input = document.getElementById(inputId);
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById(listId).appendChild(li);

  input.value = "";
  sendEmailNotification(task);
}

function toggleTheme() {
  document.body.classList.toggle("black-white");
}

// Simulated Gmail notification (console log only)
function sendEmailNotification(task) {
  console.log(`Gmail Notification: New task added - "${task}"`);
  // In real case, this would be handled by backend service with Gmail API and OAuth
}
