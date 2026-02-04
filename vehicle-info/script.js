fetch("https://m4y4nky-vehicle-api.vercel.app/api/vehicle", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    vehicle_no: vehicleNo
  })
});
