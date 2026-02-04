let qrCanvas;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrDiv = document.getElementById("qr");
  const downloadBtn = document.getElementById("download");

  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!text) {
    qrDiv.innerText = "Please enter text or a URL";
    return;
  }

  qrCanvas = document.createElement("canvas");
  qrDiv.appendChild(qrCanvas);

  QRCode.toCanvas(
    qrCanvas,
    text,
    { width: 220, margin: 2 },
    (err) => {
      if (!err) {
        downloadBtn.style.display = "block";
      }
    }
  );
}

function downloadQR() {
  const a = document.createElement("a");
  a.href = qrCanvas.toDataURL("image/png");
  a.download = "qr-code.png";
  a.click();
}
