const input = document.getElementById("text");
const qrDiv = document.getElementById("qr");
const downloadBtn = document.getElementById("download");

let canvas;

function generateQR() {
  const text = input.value.trim();
  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!text) return;

  canvas = document.createElement("canvas");
  qrDiv.appendChild(canvas);

  QRCode.toCanvas(canvas, text, {
    width: 220,
    margin: 2
  }, () => {
    downloadBtn.style.display = "block";
  });
}

input.addEventListener("input", generateQR);

downloadBtn.onclick = () => {
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "qr-code.png";
  a.click();
};
