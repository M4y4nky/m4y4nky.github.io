const form = document.getElementById("vehicleForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const vehicleNo = document.getElementById("vehicleNo").value.trim();

  if (!vehicleNo) {
    result.innerText = "Enter vehicle number";
    return;
  }

  result.innerText = "Fetching data...";

  try {
    const res = await fetch(
      "https://m4y4nky-vehicle-api.vercel.app/api/vehicle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          vehicle_no: vehicleNo
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "API failed");
    }

    // Pretty print JSON
    result.innerText = JSON.stringify(data, null, 2);

  } catch (err) {
    console.error(err);
    result.innerText = err.message;
  }
});
