const form = document.getElementById("confessForm");
const statusText = document.getElementById("status");
const button = form.querySelector("button");

// 🔥 YOUR REAL VERCEL API URL
const API_URL =
  "https://m4y4nky-m4y4nky-confess-api.vercel.app/api/confess";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = form.message.value.trim();
  if (!message) return;

  statusText.innerText = "Sending...";
  button.disabled = true;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
      statusText.innerText = "Sent anonymously 👀";
      form.reset();
    } else {
      statusText.innerText = "Failed to send";
    }
  } catch (err) {
    statusText.innerText = "Network error";
  }

  button.disabled = false;
});
