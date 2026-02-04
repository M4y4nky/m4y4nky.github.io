let qrCanvas;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrDiv = document.getElementById("qr");
  const downloadBtn = document.getElementById("download");

  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!text) {
    qrDiv.textContent = "Please enter something";
    return;
  }

  qrCanvas = document.createElement("canvas");
  qrDiv.appendChild(qrCanvas);

  QRCode.toCanvas(qrCanvas, text, {
    width: 220,
    margin: 2
  }, function (error) {
    if (error) {
      qrDiv.textContent = "Failed to generate QR";
    } else {
      downloadBtn.style.display = "inline-block";
    }
  });
}

function downloadQR() {
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = qrCanvas.toDataURL();
  link.click();
}
