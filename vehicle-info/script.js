const form = document.getElementById("vehicleForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const vehicleNo = document.getElementById("vehicleNo").value.trim();
  result.textContent = "Fetching data...";

  try {
    const res = await fetch(
      "https://m4y4nky-m4y4nky-confess-api.vercel.app/api/vehicle",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicle_no: vehicleNo })
      }
    );

    const data = await res.json();
    result.textContent = JSON.stringify(data, null, 2);

  } catch (err) {
    result.textContent = "Error fetching data";
  }
});
