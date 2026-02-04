let qrCanvas;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrDiv = document.getElementById("qr");
  const downloadBtn = document.getElementById("download");

  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!text) {
    qrDiv.innerText = "Please enter text or a link";
    return;
  }

  qrCanvas = document.createElement("canvas");
  qrDiv.appendChild(qrCanvas);

  QRCode.toCanvas(qrCanvas, text, {
    width: 220,
    margin: 2
  }, function (err) {
    if (err) {
      qrDiv.innerText = "Failed to generate QR";
    } else {
      downloadBtn.style.display = "inline-block";
    }
  });
}

function downloadQR() {
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = qrCanvas.toDataURL("image/png");
  link.click();
}
