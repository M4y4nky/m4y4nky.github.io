const form = document.getElementById("confessForm");
const textarea = form.message;
const statusText = document.getElementById("status");
const count = document.getElementById("count");
const button = form.querySelector("button");

const API_URL =
  "https://m4y4nky-m4y4nky-confess-api.vercel.app/api/confess";

// character counter
textarea.addEventListener("input", () => {
  count.innerText = textarea.value.length;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = textarea.value.trim();
  if (!message) return;

  button.disabled = true;
  statusText.textContent = "Sending…";
  statusText.className = "status";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
      statusText.textContent = "Sent anonymously 👀";
      statusText.classList.add("success");
      form.reset();
      count.innerText = "0";
    } else {
      statusText.textContent = "Failed to send";
      statusText.classList.add("error");
    }
  } catch (err) {
    statusText.textContent = "Network error";
    statusText.classList.add("error");
  }

  button.disabled = false;
});
