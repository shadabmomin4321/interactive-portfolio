function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  let userText = input.value.toLowerCase();
  let reply = "";

  if (userText.includes("name")) reply = "My name is Shadab Zulfeqar Momin.";
  else if (userText.includes("skills")) reply = "I know HTML, CSS, JavaScript, Java basics, Node.js basics & I'm learning React.";
  else if (userText.includes("college")) reply = "I study at Wilson College, Mumbai – TYIT.";
  else if (userText.includes("project")) reply = "My projects include Portfolio Website & a Student Management System in Java.";
  else reply = "Ask me about my projects, skills, journey or internship goals 😊";

  chatBox.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  input.value = "";
}

function downloadResume() {
  alert("Resume download feature coming — upload PDF soon!");
}