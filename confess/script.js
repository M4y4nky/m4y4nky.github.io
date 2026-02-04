const form = document.getElementById("confessForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = form.message.value.trim();
  if (!message) return;

  statusText.innerText = "Sending...";

  try {
    const res = await fetch(
      "https://YOUR-VERCEL-PROJECT.vercel.app/api/confess",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      }
    );

    if (res.ok) {
      statusText.innerText = "Sent anonymously 👀";
      form.reset();
    } else {
      statusText.innerText = "Failed to send";
    }
  } catch (err) {
    statusText.innerText = "Error";
  }
});
