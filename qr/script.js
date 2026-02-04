const textInput = document.getElementById("text");
const sizeInput = document.getElementById("size");
const colorInput = document.getElementById("color");
const bgInput = document.getElementById("bg");
const logoInput = document.getElementById("logo");
const qrDiv = document.getElementById("qr");
const downloadBtn = document.getElementById("download");
const toggle = document.getElementById("toggle");

let canvas;

function generateQR() {
  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!textInput.value) return;

  canvas = document.createElement("canvas");
  qrDiv.appendChild(canvas);

  QRCode.toCanvas(canvas, textInput.value, {
    width: sizeInput.value,
    color: {
      dark: colorInput.value,
      light: bgInput.value
    }
  }, () => {
    if (logoInput.files[0]) addLogo();
    downloadBtn.style.display = "block";
  });
}

function addLogo() {
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = URL.createObjectURL(logoInput.files[0]);

  img.onload = () => {
    const size = canvas.width * 0.25;
    const pos = (canvas.width - size) / 2;
    ctx.drawImage(img, pos, pos, size, size);
  };
}

function downloadQR() {
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "qr-code.png";
  a.click();
}

[textInput, sizeInput, colorInput, bgInput].forEach(el =>
  el.addEventListener("input", generateQR)
);

logoInput.addEventListener("change", generateQR);

toggle.onclick = () => {
  document.body.classList.toggle("dark");
};
